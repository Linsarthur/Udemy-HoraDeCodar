window.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    console.log("Acertô mizeravi");
  } else if (e.key == "Enter") {
    console.log("Acertô dinovo mizera");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    console.log("Agora aqui tu errou, errou feio, errou rude");
  }
}); //Sendo essa talvez a melhor forma de adicionar eventos de teclas pois com o keydown nós podemos repetir o evento infinitas vezes apenas segurando a tecla
