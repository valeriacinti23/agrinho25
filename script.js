const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalElement = document.getElementById('total');
const botaoFinalizar = document.getElementById('finalizar-compra');
let total = 0;

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const nome = botao.dataset.nome;
        const preco = parseFloat(botao.dataset.preco);

        const itemCarrinho = document.createElement('li');
        itemCarrinho.classList.add('lista-carrinho-item');
        itemCarrinho.innerHTML = `
            <span>${nome}</span>
            <span>R$ ${preco.toFixed(2)}</span>
        `;

        listaCarrinho.appendChild(itemCarrinho);
        total += preco;
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});

botaoFinalizar.addEventListener('click', () => {
    alert('Compra finalizada com sucesso!');
    listaCarrinho.innerHTML = '';
    total = 0;
    totalElement.textContent = 'Total: R$ 0,00';
});