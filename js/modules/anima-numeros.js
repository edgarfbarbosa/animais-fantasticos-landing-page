/**
* Função para iniciar a animação de números.
* Ela anima os números presentes na página, aumentando-os gradualmente até alcançar o valor final.
*/
export default function initAnimaNumeros() {
  /**
  * Função interna que anima os números.
  * Ela percorre todos os elementos que têm o atributo `data-numero`, obtendo o valor inicial, calcula o incremento e inicia um intervalo para incrementar o valor e atualizar o elemento.
  */
  function animaNumeros() {
    // Seleciona todos os elementos que têm o atributo 'data-numero'
    const numeros = document.querySelectorAll('[data-numero]')
    
    numeros.forEach(numero => {
      // Transforma a string do innerText do elemento em um número
      const total = +numero.innerText
      // Calcula o incremento baseado na divisão do total por 100 e arredondando para baixo
      const incremento = Math.floor(total / 100)
      
      // Valor inicial dos números trabalhados
      let start = 0
      // Inicia um intervalo para incrementar o valor e atualizar o elemento
      const timer = setInterval(() => {
        start = start + incremento
        numero.innerText = start
        // Se o valor de 'start' for maior que o total, atualiza o innerText do elemento para o total e para o intervalo
        if(start > total) {
          numero.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random())
    })
  }
  
  /**
  * Função interna que lida com mutações.
  * Ela verifica se a classe do elemento alvo contém 'ativo'. Se sim, ela desconecta o observador e inicia a animação.
  */
  function handleMutation(mutation) {
    // Se o elemento alvo contém a classe 'ativo', desconecta o observador e inicia a animação
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      animaNumeros()
    }
  }
  
  // Cria um novo observador para monitorar mutações nos elementos que têm a classe 'numeros'
  const observer = new MutationObserver(handleMutation)
  // Define o elemento alvo do observador
  const observerTarget = document.querySelector('.numeros')
  
  // Inicia a observação das mutações no elemento alvo
  observer.observe(observerTarget, {attributes: true})
}