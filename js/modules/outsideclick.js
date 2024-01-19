/**
* A função ousideClick seleciona o html e adiciona evento a ele.
* A função foi adicionado em um arquivo próprio para reutilização. Caso seja necessário utilizar a mesma em um menu mobile.
* @param {HTMLElement} element - O elemento HTML que deve ser monitorado para cliques fora dele.
* @param {Array<string>} events - Lista de nome de eventos que devem ser monitorados.
* @param {Function} callback - A função que deve ser chamada quando um clique fora do elemento é detectado.
*/
export default function outsideClick(element, events, callback) {
  // Seleciona o elemento raiz do documento HTML
  const html = document.documentElement
  // Atributo personalizado para marcar elementos que foram configurados com este manipulador de eventos.
  const outside = 'data-outside'
  
  /** 
  * Somente se o elemento não tem 'data-outside' o event listener é adicionado. Após adição do atributo 'data-outside', o event listener não é adicionado novamente.
  * Previne a adição de diversos Event Listeners no navegador. 
  */
  if (!element.hasAttribute(outside)) {
    /**
    * Adiciona os listeners dos eventos ao elemento HTML.
    * O uso de setTimeout aqui garante que a função handleOutsideClick seja chamada apenas depois que todas as outras
    * funções na pilha de chamadas tenham terminado de executar. Isso ajuda a prevenir possíveis bloqueios de renderização
    * e melhora o desempenho geral do aplicativo.
    */
    events.forEach(userEvent => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick))
    })
    // Marca o elemento como configurado
    element.setAttribute(outside, '')
  }
  
  /**
  * Função interna que lida com os eventos de clique fora do elemento.
  * Se o clique aconteceu fora do elemento, remove o atributo personalizado e chama a função de retorno de chamada.
  * @param {MouseEvent} event - O evento do mouse que disparou a chamada. 
  */
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside)
      events.forEach(userEvent => {
        html.addEventListener(userEvent, handleOutsideClick)
      })
      callback()
    }
  }
}