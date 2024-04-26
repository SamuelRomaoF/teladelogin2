// registrar.js

function verificarRegistro() {
    const usuario = document.getElementById('usuario');
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmarSenha');
    const usuarioAviso = document.getElementById('usuario-aviso');
    const senhaAviso = document.getElementById('senha-aviso');
    const confirmarSenhaAviso = document.getElementById('confirmarSenha-aviso');
    const avisoRegistro = document.getElementById('aviso');
    const avisoSucesso = document.getElementById('avisoSucesso');

    usuarioAviso.innerText = '';
    senhaAviso.innerText = '';
    confirmarSenhaAviso.innerText = '';
    avisoRegistro.innerText = '';

    if (usuario.value === '') {
        usuarioAviso.innerText = 'Preencha o campo Usuário.';
        usuarioAviso.style.display = 'block';
    }

    if (senha.value === '') {
        senhaAviso.innerText = 'Preencha o campo Senha.';
        senhaAviso.style.display = 'block';
    }

    if (confirmarSenha.value === '') {
        confirmarSenhaAviso.innerText = 'Confirme a senha.';
        confirmarSenhaAviso.style.display = 'block';
    }

    if (senha.value !== confirmarSenha.value) {
        avisoRegistro.innerText = 'As senhas não coincidem.';
        avisoRegistro.style.display = 'block';
    }

    if (usuario.value !== '' && senha.value !== '' && confirmarSenha.value !== '' && senha.value === confirmarSenha.value) {
        avisoSucesso.innerText = 'Usuário registrado com sucesso!';
        avisoSucesso.style.display = 'block';

        
        usuario.value = '';
        senha.value = '';
        confirmarSenha.value = '';

        
        setTimeout(function() {
            avisoSucesso.style.display = 'none';
        }, 3000); // 3 segundos
    }
}