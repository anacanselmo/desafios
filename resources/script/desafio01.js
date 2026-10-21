let senha = "ana2410"

let senhaDigitada = prompt("Digite a sua senha");

let tentativas = 3

while (tentativas > 0) {
    tentativas = tentativas - 1;
    if (senhaDigitada.toLocaleLowerCase().trim() === senha.toLocaleLowerCase().trim()) {
        alert("acesso permitido");
        break;
    }
    else {
        if (tentativas === 0) {
            alert ("Numero de tentativas esgotado,acesso negado");
        }
        alert("Senha incorreta, tentativas restantes: ".concat(tentativas));
        senhaDigitada = prompt(" digite a senha novamente ");
        }
}