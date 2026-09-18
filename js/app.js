const formulario = document.getElementById('queijo');
const level = document.getElementById('nivel');
const questao = document.getElementById('questao');
const recorde = document.getElementById('recorde');
const resposta = document.getElementById('resposta');
const relogio = document.getElementById('timer');

let resultado, nivel = 1;
let save = Number(localStorage.getItem("save"));
let contador;
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
    
    relogio.textContent = contador; 

    if(nivel <= 10) {

        contador = 10;

        let numero1 = Math.ceil(Math.random() * 10);
        let numero2 = Math.ceil(Math.random() * 10);
        let operacao;

        switch(Math.ceil(Math.random() * 2)) {
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
        }

        questao.textContent = `${numero1} ${operacao} ${numero2}`;

    } else if(nivel <= 20) {

        contador = 10;

        let numero1 = Math.ceil(Math.random() * 12);
        let numero2 = Math.ceil(Math.random() * 12);
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
                operacao = 'x';
                if(numero1 >= 11 || numero2 >= 11) {
                    numero1 = Math.ceil(Math.random() * 10);
                    numero2 = Math.ceil(Math.random() * 10);
                }
                resultado = numero1 * numero2;
                break;
        }

        questao.textContent = `${numero1} ${operacao} ${numero2}`;
    } else if (nivel <= 35) {
        contador = 10;

        let numero1 = Math.ceil(Math.random() * 20);
        let numero2 = Math.ceil(Math.random() * 20);
        let operacao;

        switch(Math.ceil(Math.random() * 4)) {
            case 1:
                operacao = '+';
                resultado = numero1 + numero2;
                break;
            case 2:
                operacao = '-';
                resultado = numero1 - numero2;
                break;
            case 3:
                operacao = 'x';
                if(numero1 >= 12 || numero2 >= 12){
                    numero1 = Math.ceil(Math.random() * 12);
                    numero2 = Math.ceil(Math.random() * 12);
                }
                resultado = numero1 * numero2;
                break;
            case 4:
                operacao = '÷';
                while(numero1 % numero2 !== 0){
                    numero2 = Math.ceil(Math.random() * 20);
                }
                resultado = numero1 / numero2;
                break;
        }

        questao.textContent = `${numero1} ${operacao} ${numero2}`;
    } else if (nivel <= 60) {
        contador = 20;

        let numero1;
        let numero2;
        let numero3;
        let operacao;
        let operacao2;

        switch (Math.ceil(Math.random() * 4)) {
            case 1:
            case 2:
            case 3:
                switch(Math.ceil(Math.random() * 4)) {
                    case 1:
                        numero1 = Math.ceil(Math.random() * 50);
                        numero2 = Math.ceil(Math.random() * 50);
                        operacao = '+';
                        resultado = numero1 + numero2;
                        break;
                    case 2:
                        numero1 = Math.ceil(Math.random() * 50);
                        numero2 = Math.ceil(Math.random() * 50);
                        operacao = '-';
                        resultado = numero1 - numero2;
                        break;
                    case 3:
                        numero1 = Math.ceil(Math.random() * 16);
                        numero2 = Math.ceil(Math.random() * 16);
                        operacao = 'x';
                        resultado = numero1 * numero2;
                        break;
                    case 4:
                        numero1 = Math.ceil(Math.random() * 200);
                        numero2 = Math.ceil(Math.random() * 200);
                        operacao = '÷';
                        while(numero1 % numero2 !== 0){
                            numero2 = Math.ceil(Math.random() * 20);
                        }
                        resultado = numero1 / numero2;
                        break;
                }
                questao.textContent = `${numero1} ${operacao} ${numero2}`;
                break;
            case 4:
                switch(Math.ceil(Math.random() * 4)) {
                    case 1:
                        numero1 = Math.ceil(Math.random() * 50);
                        numero2 = Math.ceil(Math.random() * 50);
                        numero3 = Math.ceil(Math.random() * 50);
                        operacao = '+';
                        operacao2 = '+';
                        resultado = numero1 + numero2 + numero3;
                        break;
                    case 2:
                        numero1 = Math.ceil(Math.random() * 12);
                        numero2 = Math.ceil(Math.random() * 12);
                        numero3 = Math.ceil(Math.random() * 12);
                        operacao = 'x';
                        operacao2 = 'x';
                        resultado = numero1 * numero2 * numero3;
                        break;
                    case 3:
                        numero1 = Math.ceil(Math.random() * 12);
                        numero2 = Math.ceil(Math.random() * 12);
                        numero3 = Math.ceil(Math.random() * 50);
                        operacao = 'x';
                        operacao2 = '+';
                        resultado = (numero1 * numero2) + numero3;
                        break;
                    case 4:
                        numero1 = Math.ceil(Math.random() * 50);
                        numero2 = Math.ceil(Math.random() * 12);
                        numero3 = Math.ceil(Math.random() * 12);
                        operacao = '+';
                        operacao2 = 'x';
                        resultado = numero1 + (numero2 * numero3);
                        break;
                }
                questao.textContent = `${numero1} ${operacao} ${numero2} ${operacao2} ${numero3}`;
                break;
        }
    }

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