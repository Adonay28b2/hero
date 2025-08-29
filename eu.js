document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("#meuBotao");
  if(botao){
    botao.addEventListener("click", () => {
      // código do botão
    });
  }
});

const cards = document.querySelectorAll('.card');
const confirmBtn = document.getElementById('confirmarBtn'); // Corrigido aqui
const mensagem = document.getElementById('mensagem');

let escolha = null;

// Seleção dos cards pequenos (.he) na seção "Nossos heróis"
const cardsHe = document.querySelectorAll('.he');

// Função para selecionar card principal
if (cards.length) {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('selecionado'));
            card.classList.add('selecionado');
            escolha = card.getAttribute('data-choise') || card.getAttribute('data-choice');
            // Habilita o botão ao selecionar
            if (confirmBtn) {
                confirmBtn.disabled = false;
                confirmBtn.classList.add('habilitado');
            }
        });
    });
}

if (confirmBtn && mensagem) {
    confirmBtn.addEventListener('click', () => {
        if (escolha) {
            mensagem.textContent = `Você escolheu: ${escolha}!`;
            mensagem.style.color = 'green';
        } else {
            mensagem.textContent = 'Por favor, escolha um card antes de confirmar!';
            mensagem.style.color = 'red';
        }
    });
}

// Função para ativar card de herói
if (cardsHe.length) {
    cardsHe.forEach(card => {
        card.addEventListener('click', () => {
            cardsHe.forEach(c => c.classList.remove('ativo'));
            card.classList.add('ativo');
        });
    });
}