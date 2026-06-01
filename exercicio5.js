const usuarioCadastrado = "Admin";
const senhaCadastrada = "1234";

const usuarioDigitado = "Admin";
const senhaDigitada = "9999";

if (usuarioDigitado === usuarioCadastrado && senhaDigitada === senhaCadastrada) {
    console.log("Login realizado!");
} else {
    console.log("Usuário ou senha errado.");
}