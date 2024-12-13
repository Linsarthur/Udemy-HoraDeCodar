console.log("ainda não chamou o callback")

setTimeout(function(){
    console.log(('chamou o callback'));
    
}, 2000)

console.log('Ainda não chamou o callback');


console.log('1');
setTimeout(() => {
    console.log('2');
     
}, 2000);