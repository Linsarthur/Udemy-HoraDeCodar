function veriricarAlgo(num){
    return new Promise((resolve, reject) => {
        if (num == 2){
            resolve(console.log('O número é 2'))
        }else {
            reject(new Error('Falhou'))
        }
    })
}

veriricarAlgo(2)
veriricarAlgo(1)