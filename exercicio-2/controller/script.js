let usuarios = [];


function cadastrar(event){
    event.preventDefault();
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if(idade>=18){
    alert("usuario tem mais de dezoito anos")   
    }else{
   alert("tem menos de dezoito anos")
    }


    salvarUsuario(nome, idade);
}


function salvarUsuario(nome, idade){
usuarios.push({nome: nome, idade: idade});
console.log("usuario cadastrado: " + nome);
}