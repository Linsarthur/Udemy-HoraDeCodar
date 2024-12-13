function checarNumero(num){
  let number = Number(num)
  if(Number.isNaN(number)){
    console.log("Aceito apenas números, irmão");
    
  }else{
    return number
  }
}

checarNumero("sdadas")
checarNumero(2131)