// 🔥 Firebase config correcto para tu proyecto (CDN)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChVXaiee2KXgalfwvOwwXDd8une9d3M2g",
  authDomain: "fir-manager-5e0ef.firebaseapp.com",
  projectId: "fir-manager-5e0ef",
  storageBucket: "fir-manager-5e0ef.firebasestorage.app",
  messagingSenderId: "60765298961",
  appId: "1:60765298961:web:8bc064f762927231352cb0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);