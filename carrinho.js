document.addEventListener('DOMContentLoaded', function() {
    const botao1 = document.getElementById('botao1');
    const botao2 = document.getElementById('botao2');
    const botao3 = document.getElementById('botao3');
    const quantidade = document.getElementById('quantidade');

    botao1.addEventListener('click', function() {
        adicionarAoCarrinho(1);
    });

    botao2.addEventListener('click', function() {
        adicionarAoCarrinho(2);
    });

    botao3.addEventListener('click', function() {
        adicionarAoCarrinho(3);
    });

    function adicionarAoCarrinho(item) {
        let quantidadeAtual = parseInt(quantidade.textContent);
        quantidadeAtual++;
        quantidade.textContent = quantidadeAtual;
    }
});