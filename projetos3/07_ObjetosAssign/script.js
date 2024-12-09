let objetoA = {
  prop1: "Teste",
  prop2: "Testando",
}

let objetoB = {
  prop3: "Propriedade"
}

Object.assign(objetoA, objetoB)

console.log(objetoA)

let carro = {
  portas: 2,
  portamalas: "200l",
  motor: "2.0"
}

let adicionais = {
  tetosolar: true,
  arcondicionado: true,
}

console.log(carro)
Object.assign(carro, adicionais)
console.log(carro);
