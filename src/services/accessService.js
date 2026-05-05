import { sha256 } from "js-sha256";
import { db } from "./firebaseConfig.js";
import { validateAndUseCode } from "./accessControl.js";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
function normalizeCode(code) {
  return code.trim().toUpperCase();
}
// 🔐 hash (igual que en manager)
function hashCode(code) {
  const clean = code.trim().toUpperCase();
  return sha256(clean);
}


// 🔐 VALIDAR CÓDIGO (nuevo sistema)
export async function validateAccessCode(code) {
  const result = await validateAndUseCode("geo-capital5", code);

  console.log("RESULT:", result);

  if (result.ok) {
    localStorage.setItem("authorized", "true");
    return { ok: true };
  } else {
    return { ok: false, error: result.reason };
  }
}