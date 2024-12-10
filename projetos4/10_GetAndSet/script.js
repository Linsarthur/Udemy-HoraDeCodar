class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor
    }
    latir(){
        console.log("Au au'");
    }
    get gerCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor
    }
}


let pastorAlemao = new Cachorro("SRD", "Sem cor")
console.log(pastorAlemao);
pastorAlemao.setCor = "marrom";
console.log(pastorAlemao.gerCor);
