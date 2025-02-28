document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');
    const tabItems = document.querySelectorAll('[data-tab-item]');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const tabTarget = e.target.dataset.tabButton;

            // Encontrar os elementos correspondentes
            const tabContent = document.querySelector(`[data-tab-id="${tabTarget}"]`);
            const tabItem = document.querySelector(`[data-tab-item="${tabTarget}"]`);

            // Remover classes ativas de todos
            hideAllTabs();

            // Adicionar classe ativa aos 3 elementos
            button.classList.add('hero__content__tab--is-active');       // 1º: Botão
            tabContent.classList.add('hero__content__tab--is-active');   // 2º: <ul>
            tabItem.classList.add('hero__content__tab--is-active');      // 3º: <li>
        });
    });

    function hideAllTabs() {
        buttons.forEach(btn => btn.classList.remove('hero__content__tab--is-active'));
        tabs.forEach(tab => tab.classList.remove('hero__content__tab--is-active'));
        tabItems.forEach(item => item.classList.remove('hero__content__tab--is-active'));
    }
});

// Variável para armazenar a posição anterior do scroll
let posicaoAnterior = 0;

window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let posicaoAtual = window.scrollY; // Posição atual do scroll

    if (posicaoAtual > posicaoAnterior) {
        // Rolando para baixo - esconde o header
        header.style.top = '-100px'; // Ajuste esse valor conforme a altura do seu header
    } else {
        // Rolando para cima - mostra o header
        header.style.top = '0';
    }

    // Atualiza a posição anterior
    posicaoAnterior = posicaoAtual;
});