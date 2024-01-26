export default function initFuncionamento() {
  // Seleciona o elemento com o data-attribute 'data-semana'
  const funcionamento = document.querySelector('[data-semana]')
  /**
  * Seleciona os valores dentro do data-attribute 'data-semana'.
  * Utiliza o método split para transformar os valores selecionados em um array.
  * Utiliza 'map(Number)' para transformar todos os valores selecionados em números.
  */
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
  // Seleciona os valores dentro do data-attribute 'data-horario' e converte em um array com valores numéricos
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)
  // Variável armazenando a data atual
  const dataAgora = new Date()
  // Variável armazenando o dia atual
  const diaAgora = dataAgora.getDay()
  // Variável armazenando o horário atual
  const horarioAgora = dataAgora.getHours()
  /**
  * A variável abaixo verifica se dentro do array contendo os dias de semana existe o valor do dia atual.
  * Caso exista, o valor da variável será diferente de -1.
  */
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1
  // A variável abaixo verifica se o horário atual é maior que o horário de abertura e menor que o horário de fechar do estabelecimento
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1] ? true : false
  // Se 'horarioAberto' e 'semanaAberto' retornarem 'true', adiciona ao elemento que demonstra o funcionamento a classe 'aberto'
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto')
  }
}