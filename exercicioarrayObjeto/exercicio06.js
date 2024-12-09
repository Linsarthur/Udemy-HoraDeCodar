let celulares = [
  "IphoneXR",
  "Iphone11",
  "Iphone12",
  "Iphone13",
  "Iphone14",
  "Iphone15",
  "Iphone16",
];
let carros = ["Civic", "Corolla", "BMW X6", "HB20"];

function verificarElementos(arr) {
    if(arr.length >= 5){
        console.log("Muitos elementos");
    }else{
        console.log("Poucos elementos");
        
    }
    
}
verificarElementos(celulares)