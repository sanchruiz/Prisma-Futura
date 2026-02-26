// Header sticky al hacer scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Animación de aparición al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeEls = document.querySelectorAll(".fade-in");
    const showOnScroll = () => {
        fadeEls.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 80) {
                el.classList.add("visible");
            }
        });
    };
    showOnScroll();
    window.addEventListener("scroll", showOnScroll);
});

// Indicador de scroll
window.addEventListener("scroll", () => {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = scrollPercent + "%";
    }
});

// Formulario de contacto con modal
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const modal = document.getElementById("thankYouModal");
            if (modal) modal.classList.add("show");
            form.reset();
        });
    }
});

// Cerrar modal
function closeModal() {
    const modal = document.getElementById("thankYouModal");
    if (modal) modal.classList.remove("show");
}

window.addEventListener("click", (e) => {
    const modal = document.getElementById("thankYouModal");
    if (modal && e.target === modal) closeModal();
});
// Contadores animados para logros
const animateCounters = () => {
  const counters = document.querySelectorAll('.logro-numero');
  let animated = false;

  const startAnimation = () => {
    if (animated) return;
    animated = true;
    counters.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'));
      let current = 0;
      const increment = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += increment;
        el.textContent = current >= target ? target : current;
        if (current >= target) clearInterval(timer);
      }, 40);
    });
  };

  const section = document.querySelector('.logros');
  if (section) {
    section.addEventListener('mouseenter', startAnimation, { once: true });
    section.addEventListener('touchstart', startAnimation, { once: true, passive: true });
  }
};

document.addEventListener('DOMContentLoaded', animateCounters);

// Actualizar año actual en el footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
