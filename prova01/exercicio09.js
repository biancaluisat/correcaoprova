let tempos = [234, 233, 22, 456, 34];
let nomes = ['Atlas', 'Optimus', 'Bolt', 'Titan', 'Zeus', 'Echo', 'Shadow'];

let menorTempo = tempos[i];
let indiceMenor = 0;

for (let i = 0; i < tempos.length; i++){
    if (tempos[i] < menorTempo){
        menorTempo = tempos[i];
        indiceMenor = 1;
    }
    }

console.log(`O robo campeão foi ${nomes[indiceMenor]} com o menor tempo de ${menorTempo} segundos`);

//1 ponto.