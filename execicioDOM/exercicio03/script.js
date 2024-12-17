let btn = document.querySelector("#ativar")
let btn2 = document.querySelector("#remover")

btn.addEventListener("click", ()=> {
    let paragrafo = document.querySelector("#paragrafo")
    paragrafo.style.backgroundColor = "yellow"
    
})

btn2.addEventListener("click", ()=> {
    let paragrafo = document.querySelector("#paragrafo")
    paragrafo.style.backgroundColor = "transparent"
    
})