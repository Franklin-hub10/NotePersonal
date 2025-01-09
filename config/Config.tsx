// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getDatabase} from 'firebase/database'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoej8YSmin-0g1dEo8p-QDj2requMjvZM",
  authDomain: "app-crud-6c303.firebaseapp.com",
  databaseURL: "https://app-crud-6c303-default-rtdb.firebaseio.com",
  projectId: "app-crud-6c303",
  storageBucket: "app-crud-6c303.firebasestorage.app",
  messagingSenderId: "814252065107",
  appId: "1:814252065107:web:e0bd00bbe9fe7e475e21a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)