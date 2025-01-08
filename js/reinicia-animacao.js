// não modificar este arquivo!
// faz a animação do texto recomeçar toda vez que um "link" de filme é
// clicado
//
// implementei duas abordagens: uma usando jQuery e outra sem
// isso pode ser útil para você poder comparar um mesmo código usando
// jQuery e usando "vanilla" JavaScript (JavaScript "puro")


// se tivermos jQuery incluído na página, vamos usa-lo
if (typeof $ !== 'undefined') {
  // pega o elemento que contém o texto com a intro do filme
  let $introTextEl = $('.container > pre');

  // atribui um evento de clique à <nav id="movies"></nav>, mas que vai
  // disparar apenas se o que for clicado for um <li></li>
  // (isso chama "event delegation")
  //
  $('#filmes').on('click', 'li', e => {
    // remove a classe ".animacao-subindo", que faz o texto subir
    $introTextEl.removeClass('animacao-subindo');
    // define a propriedade visibility como hidden para evitar que o usuário
    // veja a animação sendo interrompida
    $introTextEl.css('visibility', 'hidden');

    // daqui 0ms (no próximo "tick" de atualização), devolver a classe
    // ".animacao-subindo" e tornar o texto visível novamente
    setTimeout(() => {
      $introTextEl.addClass('animacao-subindo');
      $introTextEl.css('visibility', 'visible');
    }, 0);
  });
}



// se não tiver jQuery, fazer com vanilla javascript
else {
  // pega o elemento que contém o texto com a intro do filme
  let introTextEl = document.querySelector('.container > pre');

  // atribui um evento de clique à <nav id="movies"></nav>
  document.querySelector('#filmes').addEventListener('click', e => {
    // queremos apenas cliques cujo alvo foram <li></li>
    if (e.currentTarget.matches('li')) {
      // remove a classe ".animacao-subindo", que faz o texto subir
      introTextEl.classList.remove('animacao-subindo');
      // define a propriedade visibility como hidden para evitar que o usuário
      // veja a animação sendo interrompida
      introTextEl.style.visibility = 'hidden';

      // daqui 0ms (no próximo "tick" de atualização), devolver a classe
      // ".animacao-subindo" e tornar o texto visível novamente
      setTimeout(() => {
        introTextEl.classList.add('animacao-subindo');
        introTextEl.style.visibility = 'visible';
      }, 0);
    }
  });
}
