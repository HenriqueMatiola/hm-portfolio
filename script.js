// IntersectionObserver único para todas as animações
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // começa a animar um pouco antes de entrar totalmente
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.45
  }
);

// Observe todas as classes de fade sem repetir código
['.fade-left', '.fade-right', '.fade01', '.fade02'].forEach((selector) => {
  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
});

// Botão "voltar ao topo" (com reduced motion)
const buttonTop = document.querySelector('.buttonTop');
if (buttonTop) {
  buttonTop.setAttribute('aria-label', 'Voltar ao topo');
  buttonTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  }, { passive: true });
}
