let cachorro = {
    patas: 4,
    raca:"SRD",
    latir: function(){
        console.log("Au au");
        
    }
}

let labrador = Object.create(cachorro)
labrador.latir()

let pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao.raca);


function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({})
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro
}

let doberman = criarCachorro("Doberman", 4, "Preto")
console.log(doberman.raca);
console.log(doberman.patas);
console.log(doberman.cor);
