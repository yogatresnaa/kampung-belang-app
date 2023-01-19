/* eslint-disable no-useless-constructor */
class AulaSerbaguna extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="aula-cafe">
    <div class="hero-image-aula">
       <img src="./heros/hero-image_2.jpg" alt"">
    </div>
    
    </div>
    `;
  }
}

customElements.define('aula-serbaguna', AulaSerbaguna);
