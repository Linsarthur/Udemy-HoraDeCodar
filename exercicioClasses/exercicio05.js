/*
criar uma classe conta bancaria
propriedades: salco na conta corrente, saldo poupança e juros poupança
metodos: saque, deposito, tranferencia entre contas
criar uma conta especial que herda da conta normal
na conta especial juros são dobrados da conta normal 
*/

class ContaBancaria {
  constructor(saldoContaCorrente, saldoPoupanca, jurosPoupanca) {
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  deposito(valor) {
    this.saldoContaCorrente += valor;
  }

  saque(valor) {
    this.saldoContaCorrente -= valor;
  }

  tranferenciaEntreContas(valor) {
    this.saldoContaCorrente -= valor;
    this.saldoPoupanca += valor;
  }
}

class ContaEspecial extends ContaBancaria {
  constructor(saldoContaCorrente, saldoPoupanca, jurosDobrado) {
    super(saldoContaCorrente, saldoPoupanca, jurosDobrado);
    this.jurosDobrado = jurosDobrado * 2;
  }
}

let banco = new ContaBancaria(1500, 25000, 5000);
let conta2 = new ContaEspecial(1500, 25000, 5000);

banco.deposito(500);
banco.saque(200);
banco.tranferenciaEntreContas(300);
console.log(banco);
console.log(conta2);
