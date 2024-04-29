import initAnimaNumeros from './anima-numeros.js'

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url)
      const animaisJSON = await animaisResponse.json()
      const numerosGrid = document.querySelector('.numeros-grid')
      
      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal)
        numerosGrid.appendChild(divAnimal)
      })
      /** A animação dos números dos animais só deve iniciar após "puxar" os animais, por esse motivo initAnimaNumeros está sendo usado aqui */
      initAnimaNumeros()
    } catch(erro) {
      console.error(erro)
    }
  }
  
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    
    return div
  }
  
  fetchAnimais('../../animaisapi.json')
}