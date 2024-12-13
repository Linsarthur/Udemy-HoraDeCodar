const reg1 = /[12345]/

console.log(reg1.test(6));


const reg2 = /[0-9]/ //Usando para verificar se tem números na frase

console.log(reg2.test(9));
console.log(reg2.test(4));
console.log(reg2.test(74));
console.log(reg2.test(2));
console.log(reg2.test(44));
console.log(reg2.test(22));
console.log(reg2.test(0));