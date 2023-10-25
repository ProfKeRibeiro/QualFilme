const nickname = document.querySelector('#nome');
const pts = document.querySelector('#pontos');
const ranking = document.querySelector('.podio');

var nick = localStorage.getItem('nick')
var pontuacao = localStorage.getItem('total-pts');
var apelidos = JSON.parse(localStorage.getItem('apelidos')) || [];
var v_pontuacao = JSON.parse(localStorage.getItem('pontos_jogador')) || [];

nickname.innerHTML = `Parabéns ${nick}!`;
pts.innerHTML = `${pontuacao} pontos`;

var jogadores = [];
    for (var i = 0; i < apelidos.length; i++) {
      jogadores.push({ apelido: apelidos[i], pontuacao: v_pontuacao[i] });
    }
    
jogadores.sort(function(a, b) {
    return b.pontuacao - a.pontuacao;
  });

  for (var j = 0; j < jogadores.length; j++) {
    if (j<=4){
      ranking.innerHTML += `
      <h2><img src="./assets/${j+1}-place.svg"> ${jogadores[j].apelido}: ${jogadores[j].pontuacao} pontos</h2>`
    }
       }
                
document.querySelector('#btn-play-again').addEventListener('click', function(){
  window.location.href='./index.html'
})