export default function initDropdownMenu() {}

/** Seleciona todos os submenus */
const dropdownMenus = document.querySelectorAll('[data-dropdown]')

/** Utiliza o forEach para adicionar o event listener 'click' e 'touchstart' a cada submenu. */
dropdownMenus.forEach( menu => {
  ['touchstart', 'click'].forEach(userEvent => menu.addEventListener(userEvent, handleClick))
})

/**
* A função handleClick adiciona a classe 'active' ao submenu clicado.
* O 'this' se refere ao elemento atribuido no event listener que chama essa função.
* @param {*} event - Evento que aciona a função.
*/
function handleClick(event) {
  event.preventDefault()
  this.classList.toggle('active')
}