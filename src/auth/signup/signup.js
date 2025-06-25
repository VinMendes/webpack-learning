import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config.js";

console.log("✅ signup.js carregado!");

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM totalmente carregado");

    const form = document.getElementById("signupForm");
    const errorMsg = document.getElementById("errorMsg");

    if (!form) {
        console.error("❌ Formulário não encontrado! Verifique o ID 'signupForm'");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log("📨 Formulário enviado");

        const email = form.email.value;
        const password = form.password.value;

        console.log("📧 Email:", email);
        console.log("🔒 Senha:", password);

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("✅ Conta criada com sucesso!");
                window.location.href = "../../home/home.html";
            })
            .catch((error) => {
                const mensagem = traduzErro(error.code);
                console.error("❌ Erro no Firebase:", error.code, "-", mensagem);
                alert("Erro Firebase: " + error.code);
                errorMsg.textContent = "Erro ao criar conta: " + mensagem;
            });
    });
});

function traduzErro(codigo) {
    switch (codigo) {
        case "auth/email-already-in-use":
            return "Email já está em uso.";
        case "auth/invalid-email":
            return "Email inválido.";
        case "auth/weak-password":
            return "Senha fraca (mínimo 6 caracteres).";
        default:
            return "Erro desconhecido.";
    }
}