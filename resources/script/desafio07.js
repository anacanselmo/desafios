 let notas = [7, 8, 10, 11, 6];

// while: remover notas inválidas
let i = 0;
while (i < notas.length) {
    if (notas[i] < 0 || notas[i] > 10) {
        notas.splice(i, 1);
    } else {
        i++;
    }
}

// forEach: exibir notas
notas.forEach(nota => console.log(nota));

// includes: verificar nota 10
console.log(notas.includes(10));

// indexOf: encontrar nota 8
console.log(notas.indexOf(8));

// splice: remover nota 6
notas.splice(notas.indexOf(6), 1);

// sort: ordenar notas
notas.sort((a, b) => a - b);
console.log(notas);