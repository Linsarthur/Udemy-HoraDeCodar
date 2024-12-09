let lista1 = [2, 4];
let lista2 = [1, 2, 3, 4];

function contarArray(number) {
  let cont = 0;
  for (let i = 0; i < number.length; i++) {
    cont++;
  }
  return cont;
}

console.log(contarArray(lista1));
console.log(contarArray(lista2));


//Fiz essa palhaçada toda aqui mas eu poderia ter só usado o .length, fui burro 

console.log(lista1.length);
console.log(lista2.length);

