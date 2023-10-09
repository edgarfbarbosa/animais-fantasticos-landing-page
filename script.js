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

const accordionList = document.querySelectorAll('.faq-lista dt')

function activeAccordion() {
  // e.preventDefault()
  // e.currentTarget.nextElementSibling.classList.add('ativo')
  // Ao invés de utilizar event, eu posso utilizar this que fará referência ao item já selecionado
  this.classList.add('ativo')
  this.nextElementSibling.classList.add('ativo')
}

accordionList.forEach((item) => {
  item.addEventListener('click', activeAccordion)
})