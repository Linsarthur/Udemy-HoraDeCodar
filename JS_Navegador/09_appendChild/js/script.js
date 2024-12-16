let novoElemento = document.createElement("p")
let texto = document.createTextNode("Algum Texto")

novoElemento.appendChild(texto)

let p = document.querySelector("#paragrado-principal")
let pai = p.parenetNode;

pai.appendChild(novoElemento)
