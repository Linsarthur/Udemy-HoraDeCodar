let idade = 19
let cnh = false

if(idade >= 18 && cnh == true){
    console.log(`${idade} anos`);
    console.log(`Possui cnh: ${cnh}`);
    console.log("Usuário habilitado.");
    
}else if(idade >= 18 && cnh == false){
    console.log(`${idade} anos`);
    console.log(`Possui cnh: ${cnh}`);
    console.log("Usuário não habilitado. Porém tem idade para tirar habilitação.");
    
}else{
    console.log(`${idade} anos`);
    console.log(`Possui cnh: ${cnh}`);
    
    
    console.log("Usuário não habilitado e não pode tirar habilitação ainda.");
    
}