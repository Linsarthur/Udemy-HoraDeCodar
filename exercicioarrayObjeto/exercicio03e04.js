const onibus = {
    rodas: 8,
    passageiros: 40,
    portas:2
}

console.log(onibus);
console.log(`O onibus possui ${onibus.rodas} rodas`);
console.log(`Comporta até ${onibus.passageiros} passageiros`);
console.log(`E tem um total de ${onibus.portas} portas`);


//Implementação do exercicio04

onibus.janelas = 20;

delete onibus.rodas

console.log(`O onibus possui um total de ${onibus.janelas} janelas`);

console.log(onibus);