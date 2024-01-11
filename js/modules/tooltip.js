/**
* Inicializa funcionalidade tooltip em todos os elementos que possuem o atributo data-tooltip.
* Quando o mouse passa sobre um desses elementos, um tooltip é criado e exibido.
* A posição do tooltip segue o movimento do mouse.
* @function
*/
export default function initTooltip() {
  /** Seleciona todos os elementos com o atributo data-tooltip */
  const tooltips = document.querySelectorAll('[data-tooltip]')
  /** Adiciona o evento 'mouseover' em cada elemento selecionado */
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })
  
  /**
  * Função chamada quando o evento 'mouseover' é disparado.
  * A função cria uma caixa de informação para o elemento e adiciona event listeners para 'mousemove' e 'mouseleave'.
  * @param {*} e - Evento do mouse. 
  */
  function onMouseOver(e) {
    const tooltipBox = criarTooltipBox(this)
    
    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseMove)
    
    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this
    this.addEventListener('mouseleave', onMouseLeave)  
  }
  
  /**
  * Objeto que lida com o evento 'mouseleave'.
  * Remove o tooltip e os event listeners associados ao elemento.
  * Esse objeto tem um método 'handleEvent' que é chamado quando o evento é disparado.
  */
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }
  
  /**
  * Objeto que lida com o evento 'mousemove'.
  * Atualiza posição do tooltip para seguir o movimento do mouse.
  * Esse objeto tem um método 'handleEvent' que é chamado quando o evento é disparado.
  */
  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + 'px'
      this.tooltipBox.style.left = e.pageX + 20 + 'px'
    }
  }
  
  /**
  * Cria um tooltip para o elemento especificado.
  * O tooltip contém o texto do atributo aria-label do elemento.
  * @param {HTMLElement} element - Elemento para qual o tooltip deve ser criado. 
  * @returns {HTMLElement} Tooltip criado.
  */
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    
    document.body.appendChild(tooltipBox)
    
    return tooltipBox
  }
}