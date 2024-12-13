let promiseErrada = Promise.resolve(new Error('Algo deu errado'))

console.log('lalala');


promiseErrada.then((value) => console.log(value)).catch(reason => console.log("Erro:" + reason))

