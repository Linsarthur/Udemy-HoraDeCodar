const pontoReges = /./;
console.log("."); //Aceita tudo

console.log(pontoReges.test("sada"));
console.log(pontoReges.test("123"));
console.log(pontoReges.test("    "));
console.log(pontoReges.test("123asd"));

const dRegex = /\d/;

console.log("d"); //Retorna true se tivermos números na string

console.log(dRegex.test("sada"));
console.log(dRegex.test("123"));
console.log(dRegex.test("    "));
console.log(dRegex.test("123asd"));

const DRegex = /\D/;

console.log("D"); //Retorna true se tivermos Caracteres que não são dígitos (não são números) na string
console.log(DRegex.test("sada"));
console.log(DRegex.test("123"));
console.log(DRegex.test("    "));
console.log(DRegex.test("123asd"));


const sRegex = /\s/;

console.log("s"); //Retorna true se tivermos Qualquer caractere de espaço em branco na string

console.log(sRegex.test("sada"));
console.log(sRegex.test("123"));
console.log(sRegex.test("    "));
console.log(sRegex.test("123asd"));

const SRegex = /\S/;

console.log("S"); //Retorna true se tivermos Caractere que não seja espaço em branco na string

console.log(SRegex.test("sada"));
console.log(SRegex.test("123"));
console.log(SRegex.test("    "));
console.log(SRegex.test("123asd"));


const wRegex = /\w/;

console.log("w"); //Retorna true se tivermos alfa númericos na string

console.log(wRegex.test("sada"));
console.log(wRegex.test("123"));
console.log(wRegex.test("    "));
console.log(wRegex.test("123asd"));


const WRegex = /\W/;

console.log("W"); //Retorna true se tivermos caracteres que não são alfa numéricos na string
console.log(WRegex.test("sada"));
console.log(WRegex.test("123"));
console.log(WRegex.test("    "));
console.log(WRegex.test("123asd"));