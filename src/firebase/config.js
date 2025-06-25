import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyARFlMvusQTXlpz4X1aqc4A0kCO9cYB0vs",
    authDomain: "webpack-learning.firebaseapp.com",
    projectId: "webpack-learning",
    storageBucket: "webpack-learning.firebasestorage.app",
    messagingSenderId: "53445620508",
    appId: "1:53445620508:web:d3900668308f66e1afc0d9",
    measurementId: "G-3KSZ1MGZTG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };