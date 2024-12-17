let texto = document.querySelector("#alterar-texto");
let textoAlterado = document.createTextNode("Texto trocado");
let paiTexto = texto.parentNode;

function clicar() {
  onclick(() => {
    paiTexto.replaceChild(texto, textoAlterado);
  });
}
