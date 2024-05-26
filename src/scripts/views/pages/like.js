import FavoritMenuRestoIdb from '../../data/favorit-resto-idb';
import { templateMenuCafe } from './teplatecreator/template-creator';

const Like = {
  async render() {
    return `
             <div class="menucafe">
                <h3> Menu Favorit mu </h3>
                <div class="menu-cafe"></div>
            </div>
    `;
  },

  async afterRender() {
    const menuResto = await FavoritMenuRestoIdb.getAllMenuResto();
    const menuRestoContainer = document.querySelector('.menu-cafe');

    menuResto.forEach((menu) => {
      menuRestoContainer.innerHTML += templateMenuCafe(menu);
    });
  },
};

export default Like;
