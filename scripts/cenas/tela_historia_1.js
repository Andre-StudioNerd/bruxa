class TelaHistoria01 {
  constructor() {
    
    const funcaoAcaoIniciarJogo = () => {
      controladorGame.alteraStatus(6);
      this.botao.botao.hide();
    }
    
    this.botao = new BotaoGerenciador('Próximo', width / 2, height / 2);
    this.botao.atribuiAcao(funcaoAcaoIniciarJogo);
    this.botao.botao.hide();
  }

  draw() {
    this._imagemTelaFundo();
    this._texto();
    this._botao();
  }

  _imagemTelaFundo() {
    image(imagemTelaHistoria01, 0, 0, width, height);
    image(imagemVitoria, width * 0.5, height * 0.35, height * 0.8, height * 0.8);
  }

  _texto() {
    textAlign(LEFT);
    textFont(fonteHistoria);
    textSize(height * 0.06);
    let texto = "    A Hipsta é uma bruxinha aprendiz, em\numa de suas aulas de feitiço ela\nacidentalmente transformou os\naldeões da vila em terríveis criaturas.";

    text(texto, width * 0.08, height * 0.22);

    texto = "    Agora ela deverá encontrar os \ningredientes secretos para que \ntodos voltem a ser como antes";

    text(texto, width * 0.08, height * 0.55);

  }

  _botao() {
    this.botao.y = height * 0.8;
    this.botao.draw();
  }
}