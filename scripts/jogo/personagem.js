class Personagem extends Animacao {
  constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite, somPulo) {
    super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);
    //this.somPulo = somPulo;
    this.y0 = y;
    
    this.vPulo = 0;
    this.gravidade = 20;
    this.qntPulos = 10;
   

  }

  pula() {
    if (this.pulos < 2)
      this.velocidadeDoPulo = this.alturaDoPulo
    this.pulos++
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0
    }
  }

  estaColidindo(inimigo) {

    const precisao = .7

    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

    return colisao;
  }
}