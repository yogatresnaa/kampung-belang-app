/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
class Profil extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <div class="profil">
              <div class="image-profil">
                <img src="./asset/gedung_depan.JPG" alt"gambar profil">
              </div>
              <div class="description-profil">
                <h3>Profil</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptatibus et iusto voluptates mollitia ipsa libero dolorum earum quasi. Praesentium earum distinctio maiores sequi nam? Explicabo quibusdam commodi facilis, exercitationem ratione dolorem magnam iusto, nisi quo harum rem, sit sequi!</p>
              
              </div>
                
              
            </div>
        `;
  }
}

customElements.define('profil-singkat', Profil);
