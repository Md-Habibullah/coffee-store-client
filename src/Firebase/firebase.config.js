// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCInxTqEDgUjpXixByo7GuZV0-xU0_Mej4",
    authDomain: "coffee-store-5e88a.firebaseapp.com",
    projectId: "coffee-store-5e88a",
    storageBucket: "coffee-store-5e88a.appspot.com",
    messagingSenderId: "1087266823238",
    appId: "1:1087266823238:web:3c1ecb007bf233d15cfe47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth