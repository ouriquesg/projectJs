alert("Olá, tudo bem? Esse é um validador teste, já que está aqui, pode me ajudar rapidinho? Se sim clique em OK. Mas lembre de um detalhe, ao preencher os campos lembre que o segundo número precisa ser MAIOR que o primeiro!");

const form = document.getElementById('formValidator');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let num1 = document.getElementById('numberOne').value;
    let num2 = document.getElementById('numberTwo').value;

    if(num2 > num1){
        console.log('Deu certo, ufa!');
        document.querySelector('.successMenssagem').style.display = 'block';

    } else{
        console.log('Não validou.');
        document.querySelector('.erroMenssag').style.display = 'block';
    }
});
