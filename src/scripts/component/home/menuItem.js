/* eslint-disable no-useless-constructor */

class MenuItem extends HTMLElement {
  constructor() {
    super();
  }

  set menuitem(menuitem) {
    this._menuitem = menuitem;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="menu-picture">
            <img src="${this._menuitem.imageMenu}" alt="...">
             <h2>${this._menuitem.title}</h2>
              <p>${this._menuitem.description}</p>
          </div>
   
     
        `;
  }
}

customElements.define('menu-item', MenuItem);
