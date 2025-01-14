document.addEventListener("DOMContentLoaded", () => {
    const maxLength = 250;

    // Seleciona todas as descrições
    document.querySelectorAll(".descricao").forEach((descricao) => {
        const textoCompleto = descricao.textContent.trim();

        // Verifica se o texto é maior que o limite
        if (textoCompleto.length > maxLength) {
            const textoCortado = textoCompleto.slice(0, maxLength) + "...";
            descricao.textContent = textoCortado;

            // Seleciona o botão ao lado da descrição
            const botaoMais = descricao.nextElementSibling;

            botaoMais.addEventListener("click", () => {
                if (botaoMais.textContent === "Ler mais") {
                    descricao.textContent = textoCompleto;
                    botaoMais.textContent = "ver menos";
                } else {
                    descricao.textContent = textoCortado;
                    botaoMais.textContent = "Ler mais";
                }
            });
        } else {
            descricao.nextElementSibling.style.display = "none";
        }
    });
});

//carrossel depoimento

const slide = document.querySelector('.carousel-slide');
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Função para atualizar o carrossel
function updateCarousel() {
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Navegação manual
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
  updateCarousel();
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
  resetAutoSlide();
});

// Navegação automática
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
}, 3000);

// Função para resetar o intervalo ao clicar nos botões
function resetAutoSlide() {
  clearInterval(autoSlide); // Para o intervalo atual
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  }, 3000);
}



