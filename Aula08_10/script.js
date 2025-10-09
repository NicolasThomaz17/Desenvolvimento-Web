// Primeiro, a gente pega os elementos do HTML que vamos usar
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const mensagemErro = document.getElementById('mensagem-erro');

// Adiciona um "ouvinte" para o evento de envio do formulário
form.addEventListener('submit', function(event) {
    // Impede o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // Pega os valores digitados nos campos
    const email = emailInput.value;
    const senha = senhaInput.value;

    // Uma validação bem simples
    if (email === '' || senha === '') {
        // Se algum campo estiver vazio, mostra uma mensagem de erro
        mensagemErro.textContent = 'Por favor, preencha todos os campos.';
    } else {
        // Se estiver tudo preenchido, limpa a mensagem de erro e simula o sucesso
        mensagemErro.textContent = '';
        alert('Login bem-sucedido!'); // Mostra um alerta simples de sucesso
        
        // Aqui, no mundo real, você enviaria os dados para um servidor.
        // Como é só um exemplo, a gente só limpa o formulário.
        form.reset();
    }
});