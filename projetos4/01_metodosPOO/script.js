let cachorro = {
    latir: function(){
        console.log("au au");
        
    }
}

cachorro.latir()

let pessoa = {
    nome: "",
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }
}

pessoa.setNome("Arthur")

console.log(pessoa.getNome());
