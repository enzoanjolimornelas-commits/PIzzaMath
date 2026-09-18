const formulario = document.getElementById('queijo');
const level = document.getElementById('nivel');
const questao = document.getElementById('questao');
const recorde = document.getElementById('recorde');
const resposta = document.getElementById('resposta');

let resultado, nivel = 1;
let save = Number(localStorage.getItem("save"));

if(save > 1) {
    recorde.textContent = `Recorde: ${save}`;
    recorde.style.display = 'block';
}

level.textContent = "Nível " + nivel; 

function gerarNovaQuestao() {
    let numero1 = Math.ceil(Math.random() * 10);
    let numero2 = Math.ceil(Math.random() * 10);
    let operacao;

    switch(Math.ceil(Math.random() * 3)) {
        case 1:
            operacao = '+';
            resultado = numero1 + numero2;
            break;
        case 2:
            operacao = '-';
            resultado = numero1 - numero2;
            break;
        case 3:
            operacao = '*';
            resultado = numero1 * numero2;
            break;
    }

    questao.textContent = `${numero1} ${operacao} ${numero2}`;
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const respostaDoJogador = Number(resposta.value);

    if(respostaDoJogador === resultado) {
        nivel += 1;
        level.textContent = "Nível " + nivel;
        gerarNovaQuestao(); 
    } else {
        alert("Erro! Nível: " + nivel);
        if(nivel > save) {
            localStorage.setItem("save", nivel);
            recorde.textContent = `Recorde: ${save}`;
            recorde.style.display = 'block';
        }
        gerarNovaQuestao();
        nivel = 1;
        level.textContent = "Nível " + nivel;
    }

    formulario.reset();
    resposta.focus(); 
});

gerarNovaQuestao();