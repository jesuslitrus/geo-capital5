import { db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ➕ Crear código
export async function createCode(code) {
  const clean = code.trim().toUpperCase();

  await addDoc(collection(db, "access_codes"), {
    code: clean,
    used: false,
    usedAt: null,
    admin: true   // 👈 CLAVE
  });
}


// 👁 Obtener todos
export async function getAllCodes() {
  const snapshot = await getDocs(collection(db, "access_codes"));

  return snapshot.docs
  .map(d => ({
    id: d.id,
    ...d.data()
  }))
  .filter(c => !c.deleted);
}


// ❌ Eliminar
export async function deleteCode(id) {
  await updateDoc(doc(db, "access_codes", id), {
    deleted: true,
    admin: true
  });
}


// 🔄 Resetear
export async function resetCode(id) {
  await updateDoc(doc(db, "access_codes", id), {
    used: false,
    usedAt: null,
    admin: true   // 👈 CLAVE
  });
}