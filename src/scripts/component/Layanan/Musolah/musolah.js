/* eslint-disable no-useless-constructor */
class Musolah extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class = "musola">
            <div class="hero-image-musola">
                <img src="./asset/gedung_depan.JPG" "alt">
            </div>
        </div>
    
    `;
  }
}

customElements.define('musola-kp', Musolah);
