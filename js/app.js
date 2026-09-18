const formulario = document.getElementById('queijo');
const level = document.getElementById('nivel');
const questao = document.getElementById('questao');
const recorde = document.getElementById('recorde');
const resposta = document.getElementById('resposta');
const relogio = document.getElementById('timer');

let resultado, nivel = 1;
let save = Number(localStorage.getItem("save"));
let contador = 5;
let intervalo; 

if(save > 1) {
    recorde.textContent = `Recorde: ${save}`;
    recorde.style.display = 'block';
}

level.textContent = "Nível " + nivel; 

function checarRecorde() {
    if(nivel > save) {
        localStorage.setItem("save", nivel);
        save = Number(localStorage.getItem("save"));
        recorde.textContent = `Recorde: ${save}`;
        recorde.style.display = 'block';
    }
}

function gerarNovaQuestao() {
    clearInterval(intervalo);
    
    contador = 5;
    relogio.textContent = contador; 

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
            while(numero2 > numero1) {
                numero2 = Math.ceil(Math.random() * 10);
            }
            resultado = numero1 - numero2;
            break;
        case 3:
            operacao = 'x';
            resultado = numero1 * numero2;
            break;
    }

    questao.textContent = `${numero1} ${operacao} ${numero2}`;

    intervalo = setInterval(() => {
        contador -= 1;
        relogio.textContent = contador;
        
        if(contador <= 0) {
            clearInterval(intervalo);
            alert("Tempo acabou! Nível: " + nivel);
            checarRecorde();
            nivel = 1;
            level.textContent = "Nível " + nivel;
            gerarNovaQuestao();
        }
    }, 1000);
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
        checarRecorde();
        nivel = 1;
        level.textContent = "Nível " + nivel;
        gerarNovaQuestao();
    }

    formulario.reset();
    resposta.focus(); 
});

gerarNovaQuestao();