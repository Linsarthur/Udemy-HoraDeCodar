let btn1 = document.querySelector("#btn1");

let btn2 = document.querySelector("#btn2");

let p = document.querySelector("p");

let a = document.querySelector("a");

function msg(e) {
  console.log("Clicou no botão");
  e.stopPropagation();
}

btn1.addEventListener("click", msg);
btn2.addEventListener("click", function (e) {
  console.log(e);
});

p.addEventListener("click", () => {
  console.log("clicou no parágrafo");
});


a.addEventListener("click", function(e){
  e.preventDefault();
  console.log("Não vai mudar de site");
  
})