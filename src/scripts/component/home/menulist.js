/* eslint-disable import/extensions */
/* eslint-disable array-callback-return */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-useless-constructor */
import './menuItem.js';

class MenuList extends HTMLElement {
  constructor() {
    super();
  }
  set menusitems(menusitems) {
    this._menusitems = menusitems;
    this.render();
  }

  render() {
    this._menusitems.map((menu) => {
      const menuItem = document.createElement('menu-item');
      menuItem.menuitem = menu;
      this.appendChild(menuItem);
    });
  }
}

customElements.define('menu-list', MenuList);
