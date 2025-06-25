import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config.js";

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "../../home/home.html";
        })
        .catch((error) => {
            errorMsg.textContent = "Email ou senha incorretos.";
            console.error(error.message);
        });
});