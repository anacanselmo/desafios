
let livros = [
    "Harry Potter",
    "O Pequeno Príncipe",
    "A Culpa é das Estrelas",
    "Dom Casmurro",
    "O Hobbit"
];

let posicao = livros.indexOf("Dom Casmurro");
if (posicao === -1) {
    console.log("Livro não encontrado.");
} else {
    console.log("Livro encontrado na posição " + posicao + ".");
}