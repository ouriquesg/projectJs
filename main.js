alert("Olá, tudo bem? Esse é um validador teste, já que está aqui, pode me ajudar rapidinho? Se sim clique em OK. Mas lembre de um detalhe, ao preencher os campos lembre que o segundo número precisa ser MAIOR que o primeiro!");

const form = document.getElementById('formValidator');
const num1 = document.getElementById('numberOne');
const num2 = document.getElementById('numberTwo');
const tudoCerto = false;

function validaNum(num1, num2, tudoCerto){
    num2 > num1;
    tudoCerto = true;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    validacao = validaNum(true)
    if(validacao){
        console.log('Deu certo, continua codando');
    } else{
        console.log('Não validou, mas deu certo.');
    }
});

console.log(form);