let nome = "Arthur"

for(let i = 0; i < 10; i+=1){
  

  if(i == 3){
    nome = "Matheus"
  }

  if(i == 5 && nome =="Matheus"){
    console.log(`O nome já é ${nome}, pode parar`);
    break;
  }
console.log(i);



}