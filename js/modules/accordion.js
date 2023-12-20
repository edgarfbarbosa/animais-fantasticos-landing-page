export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
  
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