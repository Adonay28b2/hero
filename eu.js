// Seleção dos cards de herói (cards grandes)
const cards = document.querySelectorAll(".card");
const btnConfirmar = document.getElementById("confirmar");
let heroiEscolhido = null;

cards.forEach(c => {
    c.addEventListener("click", () => {
        // limpa dos outros
        cards.forEach(el => {
            el.classList.remove("ativo");
            el.classList.remove("selecionado");
        });

        // adiciona nos clicados
        c.classList.add("ativo");
        c.classList.add("selecionado");

        // guarda a escolha
        heroiEscolhido = c.dataset.heroi;
        console.log("Herói escolhido:", heroiEscolhido);

        // habilita o botão
        btnConfirmar.disabled = false;
        btnConfirmar.classList.add("habilitado");
    });
});

// ação do botão
btnConfirmar.addEventListener("click", () => {
    if (heroiEscolhido) {
        alert("Você confirmou o " + heroiEscolhido + "!");
        // aqui você pode redirecionar, salvar no backend, etc.
    }
});

// Seleção dos cards pequenos (.he) na seção "Nossos heróis"
const cardsHe = document.querySelectorAll(".he");

cardsHe.forEach(card => {
    card.addEventListener("click", () => {
        // fecha os outros
        cardsHe.forEach(c => c.classList.remove("ativo"));
        // abre só o clicado
        card.classList.add("ativo");
    });
});