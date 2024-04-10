
// ## SELEÇÃO DE ALGUNS CAMPOS
let formGeral = document.querySelector('.formcontato__form');

let inputNome = document.querySelector('#nome');
let inputEmail = document.querySelector('#email');
let inputAssunto = document.querySelector('#assunto');
let inputMensagem = document.querySelector('#mensagem');

validaBotao();

// ## FUNÇÃO PARA VALIDAR O BOTÃO. Se não tiver nada preenchido, receberá disabled, se for preenchido, o disabled é removido
function validaBotao() {
    let campos = document.querySelectorAll('.formcontato__input, .formcontato__textarea');
    let botaoEnviar = document.querySelector('.formcontato__botao');

    let todosPreenchidos = true;

    campos.forEach(function(campo) {
        if (campo.value.trim() == '') {
            todosPreenchidos = false;
        }
    })

    if (todosPreenchidos) {
        botaoEnviar.removeAttribute('disabled');
    } else {
        botaoEnviar.setAttribute('disabled', 'disabled');
    }
}

// ## Adiciona ouvintes de evento (addEventListener) de entrada (input) para cada campo do formulário
[inputNome, inputEmail, inputAssunto, inputMensagem].forEach(function(input) { // Com cada um dos input da array, ele vai adicionar o evento de chamar o validaBotao
    input.addEventListener('input', function() {
        validaBotao();
    })
})

// ## Adiciona uma lista de Evento ('submit') que chama a função (event) e faz o formulário funcionar chamando cada função dentro dele
formGeral.addEventListener('submit', function(event) {
    // Cancela o evento se for cancelável, sem parar a continuação do mesmo.
    event.preventDefault();
    validaNome();
    validaEmail();
    validaAssunto();
    validaMensagem();
    mensagemEnviada();
})

// ## Valida se o campo Nome esta preenchido corretamente. Caso esteja vazio ou com mais de 50 caracteres, ira retornar um erro.
function validaNome() {
    let valorNome = inputNome.value.trim();

    if (valorNome == '') {
        alert('O campo nome não pode ficar vazio');
        inputNome.classList.add('error');
        return
    }

    if (valorNome.length > 50 ) {
        alert('O campo nome não pode ter mais de 50 caracteres');
        inputNome.classList.add('error');
        return
    }

    // ## SE o campo não estiver vazio e com menos de 50 caracteres, tudo ira ocorrer normalmente, e caso tenha sido adicionado a classe antes, sera removido agora.
    inputNome.classList.remove('error');


}

function validaEmail() {
    let valorEmail = inputEmail.value.trim();

    if (valorEmail == '') {
        alert('O campo do email não pode ficar vazio');
        inputEmail.classList.add('error');
        return
    }
    // REGEX BÁSICO que verifica se tem "\S+"  Corresponde a um ou mais caracteres que não são espaços em branco. "@" literalmente @. "\." literalmente um ponto(.)
    function isEmail(email) {
        let reg = /\S+@\S+\.\S+/;
        return reg.test(email)
    }

    if (!isEmail(valorEmail)) {
        alert('O campo de email precisa ser preenchido corretamente (exemplo: email@example.com)');
        inputEmail.classList.add('error');
        return
    }

    // SE for um email correto, a classe criada anteriormente será removida.
    inputEmail.classList.remove('error');

}

// ## Valida se o campo Nome esta preenchido corretamente. Caso esteja vazio ou com mais de 50 caracteres, ira retornar um erro.
function validaAssunto() {
    let valorAssunto = inputAssunto.value.trim();
    
    if (valorAssunto == '') {
        alert('O campo do assunto não pode ficar vazio');
        inputAssunto.classList.add('error');
        return
    }

    if (valorAssunto.length > 50) {
        alert('O campo assunto não pode ter mais de 50 caracteres');
        inputAssunto.classList.add('error');
        return
    }

    inputAssunto.classList.remove('error');
}


// ## VALIDA se o campo de mensagem esta preenchido e com menos de 300 caracteres
function validaMensagem() {
    let valorMensagem = inputMensagem.value.trim();

    if (valorMensagem == '') {
        alert('O campo da mansagem não pode estar vazio')
        inputMensagem.classList.add('error');
        return
    }

    if (valorMensagem.length > 300) {
        alert('O campo de mensagem deve conter no máximo 300 caracteres');
        inputMensagem.classList.add('error');
        return
    }

    inputMensagem.classList.remove('error');
}

function mensagemEnviada() {
    if (inputNome.classList.contains('error') || inputEmail.classList.contains('error') || inputAssunto.classList.contains('error') || inputMensagem.classList.contains('error')) {
        // SE algum dos campos acima tiver a classe ('error') que é recebida só se algum campo estiver errado, conforme funções anteriores, retornará um alerta.
        alert('Por favor, revise todos os campos antes de enviar')
    } else {
        // SE nenhum campo tiver com a classe ('error') o alerta sera enviado e os campos limpos.
        alert('Mensagem enviada com sucesso!');
        inputNome.value = '';
        inputEmail.value = '';
        inputAssunto.value = '';
        inputMensagem.value = '';
    }
}