export default class TrocarImagem {
  constructor(btnsImg, nome, foto) {
    this.btnsImg = document.querySelectorAll(btnsImg);
    this.nome = document.querySelector(nome);
    this.foto = document.querySelector(foto);

    this.trocarPersonagem = this.trocarPersonagem.bind(this);
    this.checkHeightScreen = this.checkHeightScreen.bind(this);
  }

  trocarPersonagem(e) {
    e.preventDefault();
    const nomePersonagem = e.target.dataset.btn;

    if (this.nome.innerText === nomePersonagem) return;

    this.removeAtivo();

    setTimeout(() => {
      const cores = {
        Jason: "#00b2c9",
        Cj: "#7ed37e",
        Lucia: "#ff3cac",
      };

      this.nome.style.color = cores[nomePersonagem] || "#ff3cac";
      this.foto.setAttribute("src", `img/${nomePersonagem.toLowerCase()}.png`);
      this.nome.innerText = nomePersonagem;

      this.addAtivo();
    }, 300);
  }

  addEvent() {
    this.btnsImg.forEach((btn) => {
      btn.addEventListener("click", this.trocarPersonagem);
      btn.addEventListener("touchstart", this.trocarPersonagem);
    });
    window.addEventListener("resize", this.checkHeightScreen);
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

  checkHeightScreen() {
    const screenHeight = window.innerHeight;
    if (screenHeight > 700) {
      this.nome.style.fontSize = "22.5rem";
      this.foto.style.height = "600px";
    } else if (screenHeight < 700 && screenHeight > 475) {
      this.nome.style.fontSize = "7.5rem";
      this.foto.style.height = "400px";
    } else {
      this.nome.style.fontSize = "7rem";
      this.foto.style.height = "250px";
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
      this.checkHeightScreen();
      this.addAtivo();
    }
  }
}
