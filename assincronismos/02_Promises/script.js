let promessa = Promise.resolve(4 + 8)

console.log('Algum código');

promessa.then((value) => console.log(`A soma é ${value}`))


let p = Promise.resolve(5)

console.log('Mais códigos');

console.log(p);

p.then((value) => {console.log(`O valor é ${value}`);
})

//posso encadear varios then
p.then((value)=> {return  value + 5})
.then((value)=>{console.log(value);
})
