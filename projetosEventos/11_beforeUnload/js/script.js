// window.addEventListener("load", ()=> {
//   alert("Assine nossos termos de uso")
// })


window.addEventListener("beforeunload", function(e){
  event.returnValue=null;
})