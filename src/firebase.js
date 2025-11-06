// Firebase initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqfG7BahN6Ii5f4LcldPBbq8HhWGelcow",
  authDomain: "teja-2-78776673-7366e.firebaseapp.com",
  projectId: "teja-2-78776673-7366e",
  storageBucket: "teja-2-78776673-7366e.firebasestorage.app",
  messagingSenderId: "616784598981",
  appId: "1:616784598981:web:63860fdb911641ce115dac",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
