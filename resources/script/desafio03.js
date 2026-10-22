let jogos = [
    "Minecraft",
    "The Sims",
    "Roblox",
    "Terraria",
    "Stardew Valley"
];
 let jogoEscolhido = prompt("Digite o nome de um jogo:");
 
// Verifique se a lista contém Minecraft
if (jogos.includes(jogo => jogo.toLowerCase() === jogoEscolhido.trim().toLowerCase())) {
    console.log("O jogo está na lista!");
} else {
    console.log("O jogo não está na lista!");
}