let jogos = [
    "Minecraft",
    "The Sims",
    "Roblox",
    "Terraria",
    "Stardew Valley"
];

let escolha = prompt("Digite o nome de um jogo:");

if (jogos.some(jogo => jogo.toLowerCase() === escolha.trim().toLowerCase())) {
    console.log("O jogo está na lista!");
} else {
    console.log("O jogo não está na lista!");
}