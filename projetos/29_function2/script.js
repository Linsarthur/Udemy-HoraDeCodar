function multiplicarTresNumeros(num1,num2,num3){
  return num1 * num2 * num3
    
}
console.log(multiplicarTresNumeros(2,3,4));


//Posso também adicionar o retorno a uma variável:

const multiX3 = multiplicarTresNumeros(4,5,6)
console.log(multiX3);

function maiorHabilitado(idade, cnh){
  if(idade >= 18 && cnh == true){
    console.log("Pode dirigir");
    
  }else{
    console.log("Não pode dirigir");
    
  }

}

maiorHabilitado(19, true)
maiorHabilitado(29, false)
maiorHabilitado(19, 0)
maiorHabilitado(17, 0)
maiorHabilitado(50, 1)
maiorHabilitado(55, 1)


