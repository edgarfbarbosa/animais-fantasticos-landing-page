function initTabNav() {
  const tabMenu = document.querySelectorAll('.animais-lista li')
  const tabContent = document.querySelectorAll('.animais-descricao section')
  
  /** Apenas se tabMenu.length e tabContent.length retornarem true o código irá funcionar. */
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')
    /**
    * A função ativarAba adiciona a classe 'ativo' em um index de tabContent.
    * @param {number} index posição no array de tabContent.
    */
    function ativarAba(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      
      tabContent[index].classList.add('ativo')
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativarAba(index)
      })
    })
  }
}

initTabNav()

function initAccordion() {
  const accordionList = document.querySelectorAll('.faq-lista dt')
  
  if(accordionList.length) {
    accordionList[0].classList.add('ativo')
    accordionList[0].nextElementSibling.classList.add('ativo')
    /**
    * A função activeAccordion adiciona ou remove a classe ativo dos elementos selecionados na variável accordionList.
    */
    function activeAccordion() {
      // e.preventDefault()
      // e.currentTarget.nextElementSibling.classList.add('ativo')
      // Ao invés de utilizar event, eu posso utilizar this que fará referência ao item já selecionado
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAccordion()

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.menu a[href^="#"]')
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

initScrollSuave()