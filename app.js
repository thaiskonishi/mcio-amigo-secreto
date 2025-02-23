//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo(){
    let nomeEntrada = document.getElementById("amigo");
    let nomeAmigo = nomeEntrada.value.trim();
    nomeEntrada.value = "";
    if(nomeAmigo !==""){
        listaAmigos.push(nomeAmigo);
        exibirLista();
    }
else {
    alert("Por favor, insira um nome válido.");
    }
}

function exibirLista(){
    let campo = document.getElementById("listaAmigos");
    campo.innerHTML = listaAmigos;
}

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = amigoSorteado;
}
