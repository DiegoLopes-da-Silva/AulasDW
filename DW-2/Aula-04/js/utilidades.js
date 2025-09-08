/* 
Função para juntar nome e sobrenome
*/

function juntarNome() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;

    let nomeCompleto = nome + ' '  + sobrenome;

    document.getElementById("nomeCompleto").innerText = nomeCompleto;
}