/* eslint-disable no-useless-constructor */
class MainContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
     <main id="mainContent"></main>
    `;
  }
}

customElements.define('main-content', MainContent);
