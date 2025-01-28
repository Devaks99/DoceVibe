document.addEventListener("DOMContentLoaded", () => {
    // Scroll suave ao clicar nos links de navegação
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll suave ao clicar no botão "Ver Produtos"
    const viewProductsButton = document.querySelector(".btn");

    if (viewProductsButton) {
        viewProductsButton.addEventListener("click", (event) => {
            event.preventDefault();
            const productsSection = document.getElementById("produtos");

            if (productsSection) {
                window.scrollTo({
                    top: productsSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }

    // Scroll suave ao clicar no link de "Contato" no header
    const contactLink = document.querySelector(".nav a[href='#contato']");
    const contactSection = document.getElementById("contato");

    if (contactLink && contactSection) {
        contactLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({
                top: contactSection.offsetTop,
                behavior: "smooth"
            });
        });
    }

    // Exemplo: alerta ao enviar formulário
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Evita o envio real do formulário
            alert("Obrigado por entrar em contato! Em breve retornaremos.");
            form.reset(); // Reseta os campos do formulário
        });
    }
});
