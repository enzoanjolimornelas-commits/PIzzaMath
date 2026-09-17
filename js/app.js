const questao = document.getElementById('questao');
const resposta = document.getElementById('resposta');
const inserir = document.getElementById('inserir');
let resultado;
let verificar = true;
let alt;

resposta.focus();
resposta.select();

do {

    let numero1 = Math.ceil(10 * Math.random());
    let numero2 = Math.ceil(10 * Math.random());

    let sorteioOperacao = Math.ceil(3 * Math.random());
    let operacao;

    switch(sorteioOperacao) {
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
            resultado = numero1 * numero2;
    }

    questao.textContent = `${numero1} ${operacao} ${numero2}`;
    
    resposta.addEventListener('click', function(){
        alt = Number(inserir.value);
        form.reset();
    });

    if(Number(inserir.value) !== resultado) {
        verificar = false;
    }

}while(verificar);