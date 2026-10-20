const usuarioCorreto = "admin";
const senhaCorreta = "1234";
const maxTentativas = 3;
let logado = false;

for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    let usuarioInput = prompt(`[Tentativa ${tentativa} de ${maxTentativas}] Digite o usuário:`);
    let senhaInput = prompt(`[Tentativa ${tentativa} de ${maxTentativas}] Digite a senha:`);

    if (usuarioInput === usuarioCorreto && senhaInput === senhaCorreta) {
        alert("Login efetuado com sucesso! Bem-Vindo.");
        logado = true;
        break;
    }

    if (tentativa < maxTentativas) {
        alert(`Dados incorretos! Você ainda tem ${maxTentativas - tentativa} tentativas(s).`);
    }
}

if (!logado) {
    alert("Número máximo de tentativas excedido! Sua conta foi bloqueada por segurança.");
}

const usuarioCorreto = "admin";
const senhaCorreta = "1234";

let loginSucesso = false;

while (!loginSucesso) {
    let usuarioDigitado = prompt("Digite o seu usuário:");
    let senhaDigitada = prompt("Digite a sua senha:");

    if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        alert("Login efetuado com sucesso! Bem-Vindo.");
        loginSucesso = true;
    } else {
        alert("Usuário ou senha incorretos. Tente novamente!");
    }
}