let pessoa = {
    maos: 2
}

// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) == Object.prototype);


let pessoaNova = Object.create(pessoa)
console.log(pessoaNova.maos);

console.log(Object.getPrototypeOf(pessoaNova) == pessoa);
