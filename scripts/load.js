function preload() {
  imagemCenario =
    loadImage('imagens/cenario/fundo_game.png');
  imagemTelaInicial =
    loadImage('imagens/cenario/telaInicial.png');
  fonteTelaInicial =
    loadFont('imagens/assets/fonteTelaInicial.otf');
  imagemPersonagem =
    loadImage('imagens/personagem/corre2.png');
  imagemInimigo =
    loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande =
    loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador =
    loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver =
    loadImage('imagens/assets/game-over.png');
  somDoJogo =
    loadSound('sons/intro.mp3');
  somDoPulo =
    loadSound('sons/jump.mp3');
}