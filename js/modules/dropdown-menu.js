import outsideClick from './outsideclick.js'

/**
* A função 'initDropdownMenu' inicializa o menu suspenso.
* Ela seleciona todos os elementos suspensos na página e adiciona um event listener para os eventos 'touchstart' e 'click'.
* Quando um desses eventos é disparado em um menu suspenso, a função 'handleClick' é chamada.
*/
export default function initDropdownMenu() {
  // Seleciona todos os submenus
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')
  
  // Utiliza o forEach para adicionar o event listener 'click' e 'touchstart' a cada submenu.
  dropdownMenus.forEach( menu => {
    ['touchstart', 'click'].forEach(userEvent => menu.addEventListener(userEvent, handleClick))
  })
  
  /**
  * A função handleClick adiciona a classe 'active' ao submenu clicado.
  * O 'this' se refere ao elemento atribuido no event listener que chama essa função.
  * A função ativa a função outsideClick.
  * @param {*} event - Evento que aciona a função.
  */
  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  }
}