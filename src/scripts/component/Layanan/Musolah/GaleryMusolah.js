/* eslint-disable no-useless-constructor */
class GaleryMusolah extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class = "musolah-galery">

            <ul>
                <li><img src="./asset/gedung_depan.JPG" "alt"></li>
                <li><img src="./asset/gedung_depan.JPG" "alt"></li>
                <li><img src="./asset/gedung_depan.JPG" "alt"></li>
            </ul>
        
        </div>
        
        
        `;
  }
}

customElements.define('galery-musolah', GaleryMusolah);
