class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
 
  set setRua(rua){
    this.rua = rua
  }
  set setBairro(bairro){
    this.bairro = bairro
  }
  set setCidade(cidade){
    this.cidade = cidade
  }
  set setEstado(estado){
    this.estado = estado
  }
}

let endereco = new Endereco("Rua alecrim", "Infantil", "Dos sonhos", "Civil")

console.log(endereco);

endereco.setRua = "Rua dos alfeneiros"
endereco.setBairro = "Litle G"
endereco.setCidade = "Alpha"
endereco.setEstado = "CE"
console.log(endereco);
