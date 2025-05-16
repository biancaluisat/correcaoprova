let ataques = [30, 50, 20, 70, 60, 40];
let vida = 500;

for (let i = 0; i < ataques.length; i++){
    vida -= ataques[i];
}
if (vida > 0){
    console.log(`O castelo sobreviveu com ${vida} pontos de vida.`);
}else {
    console.log('O castelo não sobreviveu.');
}