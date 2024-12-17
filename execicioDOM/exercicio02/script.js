let lista = document.querySelector("#minhaLista")
let btn = document.querySelector("#adicionarItem")
let contador = 1
btn.addEventListener("click", ()=>{
    let texto = document.createTextNode(`Item: ${contador}`)
    let item = document.createElement("li")
    item.appendChild(texto)
    lista.appendChild(item)
    contador++

})