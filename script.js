document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os links da navegação que começam com '#'
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Previne o comportamento padrão do link (o pulo brusco)
            e.preventDefault();

            // Pega o ID da seção (ex: '#projetos')
            const targetId = this.getAttribute('href');

            // Seleciona o elemento da seção
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calcula a posição da seção
                // Levamos em conta a altura da navbar fixa
                const navBarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navBarHeight;

                // Rola suavemente até a posição
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });

        // --- Lógica do Modal de Certificados ---

        const modal = document.getElementById('modal-visualizador');
        const modalImg = document.getElementById('img-full');
        const captionText = document.getElementById('legenda');
        const closeBtn = document.querySelector('.fechar');

        // Seleciona todas as imagens dentro dos cards de certificado
        const certImages = document.querySelectorAll('.cert-img');

        certImages.forEach(img => {
            // Ao clicar na imagem (ou no card pai, se preferir ajustar o seletor)
            img.closest('.certificado-card').addEventListener('click', () => {
                modal.style.display = "block";
                modalImg.src = img.src; // Pega o src da imagem clicada
                captionText.innerHTML = img.alt; // Usa o alt como legenda
            });
        });

        // Função para fechar o modal
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = "none";
            });
        }

        // Fecha o modal se clicar fora da imagem (no fundo escuro)
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // Bônus: Animação de "fade-in" ao rolar (Moderno)
    // Para isso, as seções precisam ter a classe 'section'
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% da seção estiver visível
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Para de observar depois que a animação acontece
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        // Prepara as seções para a animação (invisíveis e deslocadas)
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

        observer.observe(section);
    });
});