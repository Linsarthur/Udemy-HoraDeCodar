class Cachorro {
    constructor(raca, patas, cor){
        this.raca = raca
        this.patas = patas
        this.cor = cor
    }
    latir(){
        console.log("Au au");
        
    }
}

let labrador = new Cachorro("Labrador", 4, "Branco")
console.log(labrador);
labrador.latir()

