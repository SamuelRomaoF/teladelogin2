function togglePassword(id) {
    const senhaInput = document.getElementById(id);
    const eyeIcon = document.querySelector(`#${id} + i`);

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        senhaInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

function verificarLogin() {
    const usuario = document.getElementById('usuario');
    const senha = document.getElementById('senha');
    const usuarioAviso = document.getElementById('usuario-aviso');
    const senhaAviso = document.getElementById('senha-aviso');
    const avisoLogin = document.getElementById('aviso');

    if (usuario.value === '') {
        usuarioAviso.innerText = 'Preencha o campo Usuário.';
        usuarioAviso.style.display = 'block';
    } else {
        usuarioAviso.innerText = '';
        usuarioAviso.style.display = 'none';
    }

    if (senha.value === '') {
        senhaAviso.innerText = 'Preencha o campo Senha.';
        senhaAviso.style.display = 'block';
    } else {
        senhaAviso.innerText = '';
        senhaAviso.style.display = 'none';

        
        if (usuario.value !== 'samuel' || senha.value !== 'samuel') {
            avisoLogin.innerText = 'Usuário ou senha incorretos.';
            avisoLogin.style.display = 'block';
            avisoLogin.classList.add('aviso'); 
        } else {
            avisoLogin.innerText = '';
            avisoLogin.style.display = 'none';
            avisoLogin.classList.remove('aviso'); 
            // Redireciona para outro site
            window.location.href = 'https://agenciasml.netlify.app/';
        }
    }
}