class Cachorro {
    constructor (raca){
        this.raca = raca;
    }
}

let poodle = new Cachorro("Poodle")
Cachorro.prototype.raca = "SRD"

console.log(poodle.raca);
console.log(Cachorro.prototype.raca);

let pastorAlemao = new Cachorro("Pastor Alemão")
console.log(pastorAlemao.raca);
