let marcas = /\w+:\s(Nike|Adidas|Puma|Asics)/;

console.log(marcas.test("Marca: Adidas"));
console.log(marcas.test("Marca: Puma"));
console.log(marcas.test("Marca: Nike"));
console.log(marcas.test("Marca: Asics"));
console.log(marcas.test("Marca: Aple"));


