// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDCH22vjZRUDGW09NT-OuYa41DCvk3Yono",
  authDomain: "task-management-platform-9aa96.firebaseapp.com",
  projectId: "task-management-platform-9aa96",
  storageBucket: "task-management-platform-9aa96.appspot.com",
  messagingSenderId: "3913921341",
  appId: "1:3913921341:web:b5abb5a7321e8289420b54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);