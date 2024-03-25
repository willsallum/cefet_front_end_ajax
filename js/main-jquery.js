let $reviews = $('#reviews');

// no clique do botão, faz uma requisição Ajax para pegar o xcom-reviews.json
// assim que chega a resposta, coloca as avaliações na página
$('#show-reviews').click(function() {

  $.ajax({
    url: 'xcom-reviews.json',
    dataType: 'json',
    success: function(resposta) {
      // a resposta é um objeto js que contém uma propriedade chamada avaliacoes
      let avaliacoes = resposta.avaliacoes;
      // limpamos a <div id="reviews">...</div>
      $reviews.empty();
      // percorremos as avaliacoes, colocando elementos na página para cada uma
      avaliacoes.forEach(criaAvaliacaoNaPagina);
    }
  });

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
  let $review = $('<div></div>', {
    'class': 'review ' + (avaliacao.recomenda ? 'recomenda' : 'nao-recomenda')
  }).appendTo($reviews);

  $('<h3></h3>', { html: avaliacao.autor })
    .appendTo($review);
  $('<small></small>', { html: avaliacao.curtidas + ' pessoas curtiram' })
  .appendTo($review);
  $('<p></p>', { html: avaliacao.comentario })
    .appendTo($review);
}
