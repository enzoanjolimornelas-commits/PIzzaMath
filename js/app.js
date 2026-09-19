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

        contador = 5;

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

        contador = 7;

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
                        numero1 = Math.ceil(Math.random() * 600);
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
    } else if (nivel <= 100) {
        contador = 35;

        let numero1;
        let numero2;
        let numero3;
        let operacao;
        let operacao2;

        switch(Math.ceil(Math.random() * 2)) {
            case 1:
                switch(Math.ceil(Math.random() * 16)) {
                    case 1:
                        numero1 = Math.ceil(Math.random() * 20);
                        numero2 = Math.ceil(Math.random() * 20);
                        operacao = '+';
                        resultado = numero2 - numero1;
                        questao.textContent = `X + ${numero1} = ${numero2}`;
                        break;
                    case 2:
                        numero1 = Math.ceil(Math.random() * 20);
                        numero2 = Math.ceil(Math.random() * 20);
                        operacao = '-';
                        resultado = numero1 + numero2;
                        questao.textContent = `X - ${numero1} = ${numero2}`;
                        break;
                    case 3:
                        numero1 = Math.ceil(Math.random() * 20);
                        numero2 = Math.ceil(Math.random() * 20);
                        numero3 = Math.ceil(Math.random() * 3) + 1;
                        while((numero2 - numero1) % numero3 !== 0){
                            numero1 = Math.ceil(Math.random() * 20);
                            numero2 = Math.ceil(Math.random() * 20);
                            numero3 = Math.ceil(Math.random() * 3) + 1;
                        }
                        resultado = (numero2 - numero1)/numero3;
                        questao.textContent = `${numero3}X + ${numero1} = ${numero2}`;
                        break;
                    case 4:
                        numero1 = Math.ceil(Math.random() * 20);
                        numero2 = Math.ceil(Math.random() * 3) + 1;
                        numero3 = Math.ceil(Math.random() * 3) + 1;
                        while(numero1 % (numero3 - numero2) !== 0){
                            numero1 = Math.ceil(Math.random() * 20);
                            numero2 = Math.ceil(Math.random() * 3) + 1;
                            numero3 = Math.ceil(Math.random() * 3) + 1;
                        }
                        resultado = numero1/(numero3 - numero2);
                        questao.textContent = `${numero3}X - ${numero1} = ${numero2}X`;
                        break;
                    case 5:
                        numero1 = Math.ceil(Math.random() * 20);
                        numero2 = Math.ceil(Math.random() * 3) + 1;
                        numero3 = Math.ceil(Math.random() * 3) + 1;
                        while(numero1 % (numero3 + numero2) !== 0){
                            numero1 = Math.ceil(Math.random() * 20);
                            numero2 = Math.ceil(Math.random() * 3) + 1;
                            numero3 = Math.ceil(Math.random() * 3) + 1;
                        }
                        resultado = numero1/(numero3 + numero2);
                        questao.textContent = `${numero3}X + ${numero2}X = ${numero1}`;
                        break;
                    case 6:
                        numero1 = Math.ceil(Math.random() * 50);
                        numero2 = Math.ceil(Math.random() * 50);
                        resultado = 2*(numero1 + numero2);
                        questao.textContent = `${numero1} + ${numero2} = X/2`;
                        break;
                    case 7:
                        numero1 = Math.ceil(Math.random() * 20);
                        resultado = numero1 * numero1;
                        questao.textContent = `${numero1}²`;
                        break;
                    case 8:
                        numero1 = Math.ceil(Math.random() * 13);
                        numero2 = Math.ceil(Math.random() * 13);
                        resultado = numero1 * numero1 - numero2 * numero2;
                        questao.textContent = `${numero1}² - ${numero2}²`;
                        break;
                    case 9:
                        numero1 = Math.ceil(Math.random() * 13);
                        numero2 = Math.ceil(Math.random() * 13);
                        resultado = numero1 * numero1 - numero2 * numero2;
                        questao.textContent = `(${numero1} + ${numero2})(${numero1} - ${numero2})`;
                        break;
                    case 10:
                        numero1 = Math.ceil(Math.random() * 5);
                        numero2 = Math.ceil(Math.random() * 2) + 2;
                        resultado = Math.pow(numero1, numero2);
                        if(numero2 === 3) questao.textContent = `${numero1}³`;
                        else questao.textContent = `${numero1}⁴`;
                        break;
                    case 11:
                        numero1 = Math.ceil(Math.random() * 7);
                        numero2 = Math.ceil(Math.random() * 7);
                        numero3 = Math.ceil(Math.random() * 2) + 2;
                        resultado = Math.pow(numero1 + numero2, numero3);
                        if(numero3 === 3) questao.textContent = `(${numero1} + ${numero2})³`;
                        else questao.textContent = `(${numero1} + ${numero2})⁴`;
                        break;
                    case 12:
                        numero1 = Math.pow(Math.ceil(Math.random() * 15), 2);
                        resultado = Math.sqrt(numero1);
                        questao.textContent = `√(${numero1})`;
                        break;
                    case 13:
                        numero1 = Math.pow(Math.ceil(Math.random() * 15), 2);
                        numero2 = Math.pow(Math.ceil(Math.random() * 15), 2);
                        resultado = Math.sqrt(numero1) + Math.sqrt(numero2);
                        questao.textContent = `√(${numero1}) + √(${numero2})`;
                        break;
                    case 14:
                        numero1 = Math.pow(2, Math.ceil(Math.random() * 10));
                        resultado = Math.log2(numero1);
                        questao.textContent = `2^X = ${numero1}`;
                        break;
                    case 15:
                        numero1 = Math.pow(10, Math.ceil(Math.random() * 5));
                        resultado = Math.log10(numero1);
                        questao.textContent = `10^X = ${numero1}`;
                        break;
                    case 16:
                        numero1 = Math.ceil(Math.random() * 5);
                        numero2 = Math.ceil(Math.random() * 5);
                        resultado = numero2 - 1;
                        questao.textContent = ``;
                        for(let i = 0; i < numero1; i++) {
                            questao.textContent += `${numero1}^X + `;
                        }
                        questao.textContent += `= ${numero1}^${numero2}`;
                        break;
                }
            break;
            case 2:
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