// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO- Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDAKUaW73D6e0LijVU7PIZ3p2X0uNU8uQ8",
//   authDomain: "tutorials-f3107.firebaseapp.com",
//   projectId: "tutorials-f3107",
//   storageBucket: "tutorials-f3107.appspot.com",
//   messagingSenderId: "540628215818",
//   appId: "1:540628215818:web:f53df757ed865855d357f3",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAImMOYpvxZP6js92bU336_kXwekgSLdDY",
  authDomain: "tripgem-a608b.firebaseapp.com",
  projectId: "tripgem-a608b",
  storageBucket: "tripgem-a608b.firebasestorage.app",
  messagingSenderId: "111557024923",
  appId: "1:111557024923:web:392b4aa2c4e2a6ec8e7a3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
