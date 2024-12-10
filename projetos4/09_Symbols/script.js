class Cachorro {
    constructor (raca){
        this.raca = raca;
    }
}

let poodle = new Cachorro("Poodle")
Cachorro.prototype.raca = "SRD"

let patas = Symbol()

Cachorro.prototype[patas] = 4;

console.log(poodle.raca);
console.log(Cachorro.prototype.raca);

let pastorAlemao = new Cachorro("Pastor Alemão")
console.log(pastorAlemao.raca);


//Acessando o Symbol;
console.log(Cachorro.prototype[patas])
console.log(pastorAlemao[patas]);
