 let amigos = [];

const campoNome = document.getElementById('amigo');
const listaNomes = document.getElementById('listaAmigos');
const listaResultado = document.getElementById('resultado');

function adicionarAmigo () {
    let nome = campoNome.value;

    if (nome ==='') {
        alert ('Escreva um nome!');
        return;
    }
    amigos.push(nome);
    let novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaNomes.appendChild(novoItem);

    campoNome.value = '';
}

function sortearAmigo() {
    if (listaNomes.style.display === 'none'){
        amigos = [];
        listaNomes.innerHTML = '';
        listaResultado.innerHTML = '';
        listaNomes.style.display = 'block';
        return;

    }

    if(amigos.length <3) {
        alert ('Precisa de 3 amigos ou mais!');
        return;
    }

    listaResultado.innerHTML = '';
    let mistura = amigos.slice().sort(() => Math.random() - 0.5);
    let sorteado = mistura[0];
    let linha =  document.createElement('li');
    linha.textContent = 'O amigo secreto sorteado é: ' + sorteado;
    listaResultado.appendChild(linha);
    
    listaNomes.style.display = 'none';

}