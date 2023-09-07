class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonimo");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-title");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src =
      this.getAttribute("photo") || "assets/images/photo-default.webp";
    newsImage.alt = "foto da noticia";

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      .card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      width: 600px;
      border: 1px solid black;
    }

    .card__left {
      display: grid;
      grid-template-rows: 1fr 1fr 2fr;
      align-items: center;
      max-width: 300px;
    }

    .card__left > a {
      margin-top: 0px;
      color: black;
      font-weight: bold;
      font-size: 1.5rem;
      text-decoration: none;
    }

    .card__left > p {
      color: rgb(74, 74, 74);
    }

    .card__right {
      display: flex;
      justify-content: flex-start;
    }

    .card__right > img {
      max-width: 180px;
    }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
