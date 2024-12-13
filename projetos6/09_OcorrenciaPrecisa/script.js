let telefone = /\d{4,5}-\d{4}/;


console.log(telefone.test("99432-7676"));
console.log(telefone.test("8600-4262"));
console.log(telefone.test("994327676"));
