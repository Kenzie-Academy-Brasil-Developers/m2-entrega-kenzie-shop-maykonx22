class api {
  static requisicao() {
    fetch("https://m2-kenzie-shop.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
        data.products.forEach((element) => {
          this.templete(element);
        });
      });
  }

  static templete(data) {
    const section = document.querySelector("#vitrine");

    //Criação de Tags
    const div = document.createElement("div");
    const img = document.createElement("img");
    const divEstrela = document.createElement("div");

    divEstrela.id = "estrela";

    const p = document.createElement("p");
    const span = document.createElement("span");
    const button = document.createElement("button");

    //Preenchendo as tags
    img.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${data.id}/Image.png`;

    p.innerText = data.productName;
    div.appendChild(img);

    //Gerador de Estrela
    const numEstrela = Math.floor(Math.random() * 5 + 1);

    for (let i = 0; i < numEstrela; i++) {
      const imgEstrela = document.createElement("img");

      imgEstrela.src = "./src/img/estrela_cheia.png";

      divEstrela.appendChild(imgEstrela);
    }

    for (let i = 0; i < 5 - numEstrela; i++) {
      const imgEstrela = document.createElement("img");

      imgEstrela.src = "./src/img/estrela_vazia.png";

      divEstrela.appendChild(imgEstrela);
    }

    div.appendChild(divEstrela);
    //Fim Gerador de Estrela
    div.appendChild(p);

    if (data.promotionStatus) {
      const pDe = document.createElement("p");
      const spanDe = document.createElement("span");
      pDe.id = "texto-Riscado";
      pDe.innerText = "De: ";

      spanDe.innerText = `R$ ${data.price.productPrice}`;

      span.innerText = `Por: R$ ${data.price.productPromotionPrice}`;

      pDe.appendChild(spanDe);
      div.appendChild(pDe);
      div.appendChild(span);
    } else {
      const pDe = document.createElement("p");

      pDe.id = "texto-Riscado";

      span.innerText = `R$ ${data.price.productPrice}`;

      div.appendChild(pDe);
      div.appendChild(span);
    }

    button.innerText = "COMPRAR";
    //Adicionando Class/Id
    div.classList = "cards-itens";

    div.appendChild(button);
    section.appendChild(div);
  }
}

api.requisicao();
