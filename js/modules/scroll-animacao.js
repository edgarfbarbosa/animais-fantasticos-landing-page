export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.5
    /**
    * Função que verifica se cada seção está visíviel na metade da janela e, se estiver,
    * adiciona a classe 'ativo' à seção.
    */
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade
        if (sectionTop < 0) section.classList.add('ativo')
      })
    }
    
    animaScroll()
    
    window.addEventListener('scroll', animaScroll)
  }
}