import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDMQPjj8x4xGFlWpUu3Yo85W1FKGdsK1dY",
    authDomain: "furniture-app-1836c.firebaseapp.com",
    projectId: "furniture-app-1836c",
    storageBucket: "furniture-app-1836c.appspot.com",
    messagingSenderId: "543019852896",
    appId: "1:543019852896:web:71524af1b04c9dfdc38f05",
    measurementId: "G-7KXELBRB7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};