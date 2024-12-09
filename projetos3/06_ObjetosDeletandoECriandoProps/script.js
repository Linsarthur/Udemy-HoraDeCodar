let carro = {
  marca: "vw",
  portas: 4,
  eletrico: false,
  motor: 1.0,
};

console.log(carro.portas);

delete carro.portas; //Aqui mais do que explicativo, usamos para deletar uma propriedade

console.log(carro.portas);

carro.tetoSolar = true; //E aqui nós estamos criando uma propriedade

console.log(carro.tetoSolar);


let pessoa = {
    nome: "Matheus",
    idade: 24,
    profissao: "Programador"
}

console.log(pessoa)

delete pessoa.idade;

console.log(pessoa);

pessoa.casado = true

console.log(pessoa);
