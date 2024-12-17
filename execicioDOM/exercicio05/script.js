let btnPreencher = document.querySelector("#preencher")

let btnLimpar = document.querySelector("#limpar")
let input = document.querySelector("#campoTexto")



function b1(){
    input.value = "Teste, teste, teste, teste"
}
function b2(){
   input.value = ""
}

let conteudo = input.value;

   


btnPreencher.addEventListener("click", ()=>{
    b1()
    btnPreencher.disabled = true
})

btnLimpar.addEventListener("click",()=>{
    b2()
    btnPreencher.disabled = false
})