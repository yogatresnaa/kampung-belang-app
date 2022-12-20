/* eslint-disable no-useless-constructor */
class MenuCafe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>a</p>
        `;
  }
}

customElements.define('menu-cafe', MenuCafe);
