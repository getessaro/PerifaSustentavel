// Adiciona a funcionalidade de rolagem suave para todos os links internos

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links que começam com '#'
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link (o pulo imediato)
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rola a página suavemente até o elemento alvo
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
