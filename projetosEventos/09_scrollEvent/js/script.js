window.addEventListener("scroll",(e)=>{
  if(window.pageYOffset > 1000){
    console.log("Ativou")
  }else if(window.pageXOffset > 1000){
    console.log("Ativou também");
    
  }
})