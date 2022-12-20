/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
class Restoran extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <p>ini Page Restoran</p>
    `;
  }
}

customElements.define('resto-page', Restoran);
