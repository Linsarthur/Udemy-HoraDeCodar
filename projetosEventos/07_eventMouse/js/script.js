let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", () => {
  console.log("Apertaste o botão");
});

btn1.addEventListener("mouseup", () => {
  console.log("Soltaste o botão");
});

btn2.addEventListener("dblclick", () => {
  console.log("Apertaste o botão duas vezes");
});

btn2.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log("Botão direito.");
}); //GAMBIARRA PARA PEGAR O BOTÃO DIREITO
