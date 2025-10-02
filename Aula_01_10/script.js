function loginSenac(){
    let usuario = document.getElementById('txtUsuario').value;
    let senha = document.getElementById('txtSenha').value;    
    let mensagem = document.getElementById('mensagem');
    
    if(usuario == 'admin' && senha == '1234'){
        mensagem.style.color = "green";
        mensagem.innerText = "Login Correto";

        setTimeout (() =>{
            window.location.href = 'https://github.com/NicolasThomaz17';
        }, 200);
    }
    else{
        mensagem.style.color = "red";
        mensagem.innerText = "Login incorreto";
    }
}