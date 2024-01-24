/**
* Função para iniciar a animação de scroll.
* Ela verifica se há seções na página que precisam ser animadas quando são roladas para a vista.
* As seções devem ter o atributo `data-anime` definido como `scroll`.
* A classe `ativo` é adicionada às seções quando elas estão na metade da altura da janela ou mais para baixo.
* Se uma seção não está mais visível, a classe `ativo` é removida dela.
*/
export default function initAnimacaoScroll() {
  // Seleciona todas as seções que devem ser animadas
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  
  // Verifica se existem seções para animar
  if(sections.length) {
    // Define a altura da metade da janela
    const windowMetade = window.innerHeight * 0.6;
    
    /**
    * Função interna que anima as seções conforme necessário.
    * É chamada inicialmente e sempre que o evento de rolagem é disparado.
    */
    function animaScroll() {
      // Percorre todas as seções
      sections.forEach((section) => {
        // Obtém a posição superior da seção em relação à janela
        const sectionTop = section.getBoundingClientRect().top;
        // Verifica se a seção está visível na janela
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        // Se a seção está visível, adiciona a classe `ativo`
        if(isSectionVisible)
        section.classList.add('ativo');
        // Se a seção não está mais visível, remove a classe `ativo`
        else if(section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      })
    }
    
    // Chama a função de animação pela primeira vez
    animaScroll();
    
    // Adiciona um listener de evento de rolagem para chamar a função de animação sempre que a página é rolada
    window.addEventListener('scroll', animaScroll);
  }
}