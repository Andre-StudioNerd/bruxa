class TelaInicial {
  constructor() {
    
    const funcaoAcao = () => {
      this.botao.botao.hide();
      this.botaoModoInfinito.botao.hide();
      controladorGame.alteraStatus(5);
      if (!isSomHistoriaTocando) {
        somHistoria.loop();
        isSomHistoriaTocando = true;
      }
    }
    
    const funcaoAcaoInfito = () => {
      this.botao.botao.hide();
      this.botaoModoInfinito.botao.hide();
      controladorGame.alteraStatus(5);
      if (!isSomHistoriaTocando) {
        somHistoria.loop();
        isSomHistoriaTocando = true;
      }
    }
    
    this.botao = new BotaoGerenciador('Modo História', width / 2, height / 2);
    this.botao.atribuiAcao(funcaoAcao);
    this.botao.botao.hide();
    this.botao.y = height * 0.7;
    this.botao.x = width * 0.2;
    
    this.botaoModoInfinito = new BotaoGerenciador('Modo Infinito', width / 2, height / 2);
    this.botaoModoInfinito.atribuiAcao(funcaoAcaoInfito);
    this.botaoModoInfinito.botao.hide();
    this.botaoModoInfinito.y = height * 0.7;
    this.botaoModoInfinito.x = width * 0.7;
  }

  draw() {
    this._imagemTelaFundo();
    this._texto();
    this._botao();
  }

  _imagemTelaFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    color('#000');
    textSize(height * 0.15);
    text('As Aventuras de Hipsta', width / 2, height * .2);
    textSize(height * 0.075);
    text('e a Floresta Encantada', width / 2, height * .27);
  }

  _botao() {
    this.botao.draw();
    this.botaoModoInfinito.draw();
  }



}