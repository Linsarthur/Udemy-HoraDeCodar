

let btn = document.querySelector("#alterar-texto")
let p = document.querySelector("#texto")

btn.addEventListener("click", () => {
  p.textContent = "Texto alterado pelo JavaScript"
});
