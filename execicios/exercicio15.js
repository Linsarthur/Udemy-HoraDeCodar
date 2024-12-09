let num = 6
let divisoes = 0

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        divisoes++
    }
}

if(divisoes == 2){
    console.log("Primo");
    
}else{
    console.log("Não primo");
    
}