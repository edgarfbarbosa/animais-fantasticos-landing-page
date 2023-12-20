export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')
  
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
      
      const direcao = tabContent[index].dataset.anime
      
      tabContent[index].classList.add('ativo', direcao)
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativarAba(index)
      })
    })
  }
}