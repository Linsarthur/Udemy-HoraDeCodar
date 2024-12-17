let btnMostrar = document.querySelector("#mostrar")
let btnEsconder = document.querySelector("#esconder")
let texto = document.querySelector("#texto")

btnMostrar.addEventListener("click", ()=> {
    texto.style.display = "block"
})

btnEsconder.addEventListener("click", ()=>{
    texto.style.display = "none"
})