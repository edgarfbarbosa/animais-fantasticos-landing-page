/**
* Implementa o modal do projeto, sua manipulação ocorre através de cliques nos butões do modal ou fora da área do modal.
* A função seleciona todos os elementos especificados com o atributo data-modal.
* A função adiciona ou remove a classe 'ativo' ao elemento containerModal.
* @returns {HTMLElement} Retorna o container do modal.
*/
export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]')
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="container"]')
  
  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(e) {
      e.preventDefault()
      containerModal.classList.toggle('ativo')
    }
    
    function cliqueForaModal(e) {
      if (e.target == this) toggleModal(e)
    }
    
    botaoAbrir.addEventListener('click', toggleModal)
    botaoFechar.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', cliqueForaModal)
  }
}