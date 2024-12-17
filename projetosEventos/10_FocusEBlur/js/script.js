let input = document.querySelector("#input1")

input.addEventListener("focus", ()=> {
  console.log("Entrou no Foco");
  
})

input.addEventListener("blur", ()=> {
  console.log("Saiu");
  
})