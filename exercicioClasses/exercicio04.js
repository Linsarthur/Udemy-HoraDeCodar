class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo
  }
  contagemTanque(km) {
    let litrosConsumidos = km/this.consumo

    this.gasolinaRestante -= litrosConsumidos
  }
  abastecer(l){
    this.gasolinaRestante += l
  }
}

let carro = new Carro("VW", "preto", 100, 14);

console.log(carro);
carro.contagemTanque(100);
console.log(carro);
carro.abastecer(20)
console.log(carro);
