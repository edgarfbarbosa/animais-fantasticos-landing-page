export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
  /**
  * A função scrollToSection rola suavemente a página até a seção específica selecionada pelo usuário.
  * @param {Event} e Evento de clique para seleção do link.
  */
  function scrollToSection(e) {
    e.preventDefault()
    
    const href = e.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    
    // Utilizando o método scrollIntoView():
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    
    // Utilizando o método scrollTo():
    // const sectionOffSetTop = section.offsetTop
    
    // scrollTo(0, sectionOffSetTop)
    
    // scrollTo({
    //   top: sectionOffSetTop,
    //   behavior: 'smooth'
    // })
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}