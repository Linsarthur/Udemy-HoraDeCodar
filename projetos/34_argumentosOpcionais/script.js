let soma = (a,b) => {
  if(a === undefined || b === undefined){
    console.log("Essa função precisa dos dois paramêtros para funcionar!");
  }else{
    return a + b
  }
}

console.log(soma());

function nomeComidade(nome, idade){
  if(idade === undefined){
    console.log(`Seu nome é: ${nome}`);
  }else{
    console.log(`Seu nome é ${nome} e sua idade é ${idade}`);
    
  }

}

nomeComidade("Arthur", 23)


