let validarDataDeNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validarDataDeNasc.test("25/12/2024"));
console.log(validarDataDeNasc.test("02/23"));
console.log(validarDataDeNasc.test("louca"));
console.log(validarDataDeNasc.test("23/04/2001"));