let valor = [2, 3, 10, 1, 7, 1];
let i = 0;
let maior = valor[0];

while (i < valor.length){
    if (valor[i] > maior){
        maior = valor[i];
    }
    i++;
}
console.log(maior);