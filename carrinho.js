document.addEventListener('DOMContentLoaded', () => {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const lista = document.getElementById('lista-carrinho');
    const totalSpan = document.getElementById('total');

    
    function atualizarCarrinho() {
        lista.innerHTML = '';
        let totalGeral = 0;
    
        carrinho.forEach((item, index) => {
            const totalItem = item.preco * item.quantidade;
            totalGeral += totalItem;
    
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-carrinho';
            itemDiv.innerHTML = `
                <img src="${item.imagem}" class="item-imagem" alt="${item.nome}">
                <div class="item-detalhes">
                    <h4>${item.nome}</h4>
                    <p class="preco-unitario">Preço unitário: R$ ${item.preco.toFixed(2)}</p>
                </div>
                <div class="item-controles">
                    <button class="quantidade-btn minus" data-index="${index}">-</button>
                    <span class="quantidade-texto">${item.quantidade}</span>
                    <button class="quantidade-btn plus" data-index="${index}">+</button>
                </div>
                <div class="item-total">
                    R$ ${totalItem.toFixed(2)}
                </div>
                <button class="remover-item" data-index="${index}">Remover</button>
            `;
            
            lista.appendChild(itemDiv);
        });

        
        totalSpan.textContent = totalGeral.toFixed(2);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    function atualizarQuantidade(index, operacao) {
        if (operacao === '+') {
            carrinho[index].quantidade++;
        } else if (operacao === '-' && carrinho[index].quantidade > 1) {
            carrinho[index].quantidade--;
        }
        atualizarCarrinho();
    }

    lista.addEventListener('click', (e) => {
        if (e.target.classList.contains('remover-item')) {
            const index = e.target.dataset.index;
            carrinho.splice(index, 1);
            atualizarCarrinho();
        }
        else if (e.target.classList.contains('quantidade-btn')) {
            const index = e.target.dataset.index;
            const operacao = e.target.classList.contains('plus') ? '+' : '-';
            atualizarQuantidade(index, operacao);
        }
    });

    atualizarCarrinho();
});

// Mantenha o código do scroll-top existente
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var scrollTopButton = document.querySelector('.scroll-top');
    scrollTopButton.style.display = (window.pageYOffset > 200) ? 'block' : 'none';
});


