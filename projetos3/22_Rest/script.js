let num = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(num, num2, num3, num4);
