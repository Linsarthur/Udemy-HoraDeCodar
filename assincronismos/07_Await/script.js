function somaComDelaY(a, b){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(a + b)
        }, 2000)
    })
}

async function soma(a, b, c) {
    let x = somaComDelaY(a, b);
    let y = c
    return await x + y
}

soma(1,2,3).then((value)=> console.log(value))
