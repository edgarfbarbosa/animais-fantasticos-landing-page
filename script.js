const animaisLista = document.querySelectorAll('.animais-lista li')
const animaisDescricao = document.querySelectorAll('.animais-descricao section')

/**
 * A função ativarAba adiciona a classe 'ativo' em um index de animaisDescricao.
 * @param {number} index posição no array de animaisDescricao.
 */
function ativarAba(index) {
  animaisDescricao.forEach((section) => {
    section.classList.remove('ativo')
  })

  animaisDescricao[index].classList.add('ativo')
}

animaisLista.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    ativarAba(index)
  })
})