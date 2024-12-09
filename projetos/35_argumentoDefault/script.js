function potencia(base, exp = 2) {
  return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));

function armazenarSoma(x) {
  return (y) => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(5));
let soma2 = armazenarSoma(4);
console.log(soma2(10));
