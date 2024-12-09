function escreverNoConsole(){
  console.log("Função que escreve no console.log");
  
}

escreverNoConsole()

function funcaoComParametroQueEscreveNoConsole(texto){
  console.log(texto)
}

funcaoComParametroQueEscreveNoConsole("Função com parâmetro que escreve no console.log")

function imprimirUmNumero(num){
  console.log(`O número é ${num}`);
  
}

imprimirUmNumero(100)
imprimirUmNumero(200)
imprimirUmNumero(300)
imprimirUmNumero(400)

const numeroAleatorio = function (){
  console.log(Math.random(1.0, 2.0));
  
}

numeroAleatorio()
numeroAleatorio()
numeroAleatorio()
numeroAleatorio()
numeroAleatorio()
