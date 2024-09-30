
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

 
  
  const firebaseConfig = {
    apiKey: "AIzaSyCowpjtgneZEKfSU3w3I6re34SYzjgNbXw",
    authDomain: "task-8103a.firebaseapp.com",
    projectId: "task-8103a",
    storageBucket: "task-8103a.appspot.com",
    messagingSenderId: "959728244619",
    appId: "1:959728244619:web:a6d9afad7a19a89a3fc18e",
    measurementId: "G-XB5PKRDK4S",
    databaseURL: "https://task-8103a-default-rtdb.firebaseio.com"
  };


  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app); // Ensure auth is exported
