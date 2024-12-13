function saudacao(nome){
  if(typeof nome != "string"){
    throw new Error("O parametro tem que ser string")
  }else{
    console.log(`olá ${nome}`);
    
  }
}

saudacao("Matheus")
saudacao(5)

console.log("teste");
