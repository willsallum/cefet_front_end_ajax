let reviewsEl = document.querySelector('#reviews');
let showReviewsEl = document.querySelector('#show-reviews');


// no clique do botão, faz uma requisição Ajax para pegar o xcom-reviews.json
// assim que chega a resposta, coloca as avaliações na página
showReviewsEl.addEventListener('click', function() {

  let requisicao = new XMLHttpRequest();
  requisicao.open('GET', 'xcom-reviews.json');
  requisicao.responseType = 'json';
  requisicao.onreadystatechange = function() {
    if (requisicao.readyState === 4) {
      if (requisicao.status === 200) {
        // a resposta é um objeto js que contém uma propriedade chamada avaliacoes
        let avaliacoes = requisicao.response.avaliacoes;
        // limpamos a <div id="reviews">...</div>
        reviewsEl.innerHTML = '';
        // percorremos as avaliacoes, colocando elementos na página para cada uma
        avaliacoes.forEach(criaAvaliacaoNaPagina);
      }
    }
  }
  requisicao.send();
  
});


// recebe um objeto com uma avaliação e cria elementos HTML na página,
// dentro de #reviews
function criaAvaliacaoNaPagina(avaliacao) {
  // avaliacao (exemplo):
  // {
  //   "autor": "nome da pessoa",
  //   "recomenda": true,
  //   "comentario": "bla bla bla",
  //   "curtidas": 45
  // }
  let autorAvaliacaoEl = document.createElement('h3');
  autorAvaliacaoEl.innerHTML = avaliacao.autor;
  let curtidasEl = document.createElement('small');
  curtidasEl.innerHTML = avaliacao.curtidas + ' pessoas curtiram';
  let textoAvaliacaoEl = document.createElement('p');
  textoAvaliacaoEl.innerHTML = avaliacao.comentario;

  let reviewEl = document.createElement('div');
  reviewEl.classList.add('review');
  reviewEl.classList.toggle('recomenda', avaliacao.recomenda);
  reviewEl.classList.toggle('nao-recomenda', !avaliacao.recomenda);
  reviewEl.appendChild(autorAvaliacaoEl);
  reviewEl.appendChild(curtidasEl);
  reviewEl.appendChild(textoAvaliacaoEl);
  reviewsEl.appendChild(reviewEl);
}
