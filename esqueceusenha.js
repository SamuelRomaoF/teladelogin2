// recuperar-senha.js

function verificarEmail() {
    const email = document.getElementById('email');
    const emailAviso = document.getElementById('email-aviso');
    const aviso = document.getElementById('aviso');

    if (email.value === '') {
        emailAviso.innerText = 'Preencha o campo Email.';
        emailAviso.style.display = 'block';
    } else if (!email.value.includes('@')) {
        emailAviso.innerText = 'Email inválido. Deve conter "@example.com"';
        emailAviso.style.display = 'block';
    } else {
        
        aviso.innerText = 'Email enviado com sucesso!';
        aviso.style.color = 'green';
        aviso.style.display = 'block';

       
        email.value = '';

        
        setTimeout(function() {
            aviso.style.display = 'none';
        }, 3000); // 3 segundos
    }
}