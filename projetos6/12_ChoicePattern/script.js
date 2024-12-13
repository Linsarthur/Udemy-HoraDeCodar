let frutas = /\d+ (bananas|maçãs|laranjas)/

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));


const ref = /\w+: (Matheus|João|Maria)/;

console.log(ref.test("Nome: Matheus"));
console.log(ref.test("Nome: José"));
