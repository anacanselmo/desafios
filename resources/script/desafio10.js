let notas = [8, 7, 9, 4, 6, 10];

// Verifique se todas as notas são válidas.
let notasValidas = notas.every(nota => nota >= 0 && nota <= 10);

if (notasValidas) {
    console.log("Todas as notas são válidas.");
} else {
    console.log("Existem notas fora do intervalo permitido.");
}