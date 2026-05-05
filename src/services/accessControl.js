import { db } from "./firebaseConfig.js";
import { doc, runTransaction } from "firebase/firestore";
import { sha256 } from "js-sha256";

export async function validateAndUseCode(appId, inputCode) {
  const clean = inputCode.trim().toUpperCase();
  const codeHash = sha256(clean);

  const ref = doc(db, "access_control", codeHash);

  try {
    return await runTransaction(db, async (transaction) => {
      const snap = await transaction.get(ref);

      if (!snap.exists()) {
        return { ok: false, reason: "Código incorrecto" };
      }

      const data = snap.data();

      if (data.appId !== appId) {
        return { ok: false, reason: "Código incorrecto" };
      }

      if (!data.active) {
        return { ok: false, reason: "Código incorrecto" };
      }

      if (data.used) {
        return { ok: false, reason: "Contraseña usada" };
      }

      transaction.update(ref, {
        used: true,
        usedAt: new Date()
      });

      return { ok: true };
    });

  } catch (e) {
    console.error("Error:", e);
    return { ok: false, reason: "error" };
  }
}