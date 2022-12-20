/* eslint-disable no-useless-constructor */
class tredMark extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="tredmark">
        <p> @ Kampung Belang | Resto & Cacfe | 2022
    </div>
    
    `;
  }
}

customElements.define('tred-mark', tredMark);
