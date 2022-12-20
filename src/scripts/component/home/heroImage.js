/* eslint-disable lines-between-class-members */
/* eslint-disable no-useless-constructor */
class HeroImage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="hero"></div>
    `;
  }
}

customElements.define('hero-image', HeroImage);
