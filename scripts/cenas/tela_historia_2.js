class TelaHistoria02{
  
  constructor() {
    
    const funcaoAcaoIniciarJogo = () => {
      controladorGame.alteraStatus(1);
      controladorGame.modo = 1;
      if (isSomHistoriaTocando) {
        somHistoria.stop();
        isSomHistoriaTocando = false;
      }
      if (!isSomTocando) {
        somDoJogo.loop();
        isSomTocando = true;
      }
      this.botao.botao.hide();
    }
    
    this.botao = new BotaoGerenciador('Vamos Lá!', width / 2, height / 2);
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
    image(imagemTrollCapa, width * 0.5, height * 0.20, height * 1.19, height * 0.8);
    image(imagemCaldeirao, width * 0.08, height * 0.78, height * 0.13, height * 0.13);
    image(imagemSapo, width * 0.15, height * 0.78, height * 0.13, height * 0.13);
    image(imagemVeneno, width * 0.22, height * 0.78, height * 0.13, height * 0.13);
    image(imagemAranha, width * 0.29, height * 0.78, height * 0.13, height * 0.13);
  }

  _texto() {
    textAlign(LEFT);
    textFont(fonteHistoria);
    textSize(height * 0.06);
    let texto = "    Para conjurar o feitiço, Hipsta\ndeverá explorar a Floresta Encantada em\nbusca dos ingredientes secretos.";

    text(texto, width * 0.08, height * 0.2);

    texto = "    Nossa Bruxinha precisará de:\n      - 1 Caldeirão;\n      - 1 Sapo careca;\n      - Veneno de Cobra Cega; e\n      - Pêlos de Aranha Selvagem.";

    text(texto, width * 0.08, height * 0.43);

  }

  _botao() {
    this.botao.y = height * 0.8;
    this.botao.draw();
  }
  
}