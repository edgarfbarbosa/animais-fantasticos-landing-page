export default function initAnimaNumeros() {}

const numeros = document.querySelectorAll('[data-numero]')

numeros.forEach(numero => {
  // Para transformar uma string com valor numérico em number basta adicionar + na frente
  const total = +numero.innerText
  /**
  * O objetivo da variável abaixo é utilizar um valor de incremento significante para cada número.
  * Utilizando essa variável, não é necessário utilizar '++' que tornaria o incremento apenas de 1 em 1 ocasionando a demora para chegar em valores grandes.
  */
  const incremento = Math.floor(total / 100)
  
  let start = 0 // Valor inicial dos números trabalhados
  const timer = setInterval(() => {
    // Incrementa o valor inicial
    start = start + incremento
    numero.innerText = start
    /**
    * Condicional para verificar se o número 'start' já é maior do que o valor total atribuido aos números.
    * Quando o valor de 'start' for maior que o total o intervalo será parado através do método clearInterval().
    * Evitando que o clearInterval() atribua um número superior, a condicional irá atribuir o valor selecionado de cada número.
    */
    if(start > total) {
      numero.innerText = total
      clearInterval(timer)
    }
  }, 25 * Math.random())
})