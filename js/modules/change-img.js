export default class TrocarImagem {
  constructor(btnsImg, nome, foto) {
    this.btnsImg = document.querySelectorAll(btnsImg);
    this.nome = document.querySelector(nome);
    this.foto = document.querySelector(foto);

    this.trocarPersonagem = this.trocarPersonagem.bind(this);
  }

  trocarPersonagem(e) {
    e.preventDefault();
    this.removeAtivo();
    const nomePersonagem = e.target.dataset.btn;
    let fotoUrlPersonagem = this.foto.getAttribute("src");
    if (nomePersonagem === "Jason") {
      this.nome.style.color = "#00b2c9";
      const fotoJason = fotoUrlPersonagem.replace(
        /(?<=\/)[^\/]+(?=\.png)/,
        nomePersonagem.toLowerCase(),
      );
      this.foto.setAttribute("src", fotoJason);
    } else if (nomePersonagem === "Cj") {
      this.nome.style.color = "#7ed37e";
      const fotoCj = fotoUrlPersonagem.replace(
        /(?<=\/)[^\/]+(?=\.png)/,
        nomePersonagem.toLowerCase(),
      );
      this.foto.setAttribute("src", fotoCj);
    } else {
      this.nome.style.color = "#ff3cac";
      const fotoLucia = fotoUrlPersonagem.replace(
        /(?<=\/)[^\/]+(?=\.png)/,
        nomePersonagem.toLowerCase(),
      );
      this.foto.setAttribute("src", fotoLucia);
    }
    this.nome.innerText = nomePersonagem;
    this.addAtivo();
  }

  addEvent() {
    this.btnsImg.forEach((btn) => {
      btn.addEventListener("click", this.trocarPersonagem);
      btn.addEventListener("touchstart", this.trocarPersonagem);
    });
  }

  removeAtivo() {
    if (
      this.nome.classList.contains("active") &&
      this.foto.classList.contains("active")
    ) {
      this.nome.classList.remove("active");
      this.foto.classList.remove("active");
    }
  }

  addAtivo() {
    if (
      !this.nome.classList.contains("active") &&
      !this.foto.classList.contains("active")
    ) {
      this.nome.classList.add("active");
      this.foto.classList.add("active");
    }
  }

  init() {
    if (this.btnsImg.length && this.nome && this.foto) {
      this.addEvent();
      this.addAtivo();
    }
  }
}
