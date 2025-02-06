document.addEventListener("DOMContentLoaded", () => {
    // Scroll suave
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
            }
        });
    });

    // Botão Ver Produtos
    const viewProductsButton = document.querySelector(".btn");
    if (viewProductsButton) {
        viewProductsButton.addEventListener("click", (event) => {
            event.preventDefault();
            const productsSection = document.getElementById("produtos");
            if (productsSection) {
                window.scrollTo({ top: productsSection.offsetTop, behavior: "smooth" });
            }
        });
    }

    // Carrinho de compras
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContador = document.querySelector('.carrinho-contador');

    function atualizarContador() {
        const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
        carrinhoContador.textContent = totalItens;
        carrinhoContador.style.display = totalItens > 0 ? 'block' : 'none';
    }

    // Adicionar ao carrinho
    document.querySelectorAll('.button-valor').forEach(button => {
        button.addEventListener('click', (e) => {
            const produto = e.target.closest('.produto');
            const item = {
                id: produto.querySelector('h3').textContent,
                nome: produto.querySelector('h3').textContent,
                imagem: produto.querySelector('img').src,
                preco: parseFloat(button.textContent.replace('R$: ', '').replace(',', '.').trim()),
                quantidade: 1
            };

            const itemExistente = carrinho.find(i => i.id === item.id);
            if (itemExistente) {
                itemExistente.quantidade++;
            } else {
                carrinho.push(item);
            }

            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarContador();
        });
    });

    // Inicializar contador
    atualizarContador();
});

// Scroll-top (mantido fora do DOMContentLoaded)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var scrollTopButton = document.querySelector('.scroll-top');
    scrollTopButton.style.display = (window.pageYOffset > 200) ? 'block' : 'none';
});