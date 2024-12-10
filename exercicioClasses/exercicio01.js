class Banco {
  constructor(saldo) {
    this.saldo = saldo;
   
    
  }
  deposito(valorEntra) {
    this.saldo += valorEntra
  }
  saque(valorSai) {
    this.saldo -= valorSai
  }
}

let banco = new Banco(1000);
banco.deposito(1000)
console.log(banco.saldo);
banco.saque(500)
console.log(banco.saldo);



