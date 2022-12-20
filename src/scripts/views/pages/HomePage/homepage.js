/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import menus from '../../../data/firstMenu.js';
import { templateMenuUtamaResto } from '../teplatecreator/template-creator.js';
import '../../../component/home/heroImage.js';
import '../../../component/home/profile.js';
import '../../../component/home/ourSpesial.js';
import '../../../component/home/carosel.js';
import '../../../component/home/menulist';

const Homepage = {
  async render() {
    return `
        <hero-image></hero-image>
        <our-spesial></our-spesial>
        <profil-singkat></profil-singkat>
        <slider-element></slider-element>
        <div class ="menus">
        </div>
       
        
        `;
  },

  afterRender() {
    const dataMenus = menus;
    // const menuList = document.createElement('menu-list');
    const menuu = document.querySelector('.menus');
    dataMenus.forEach((datamenu) => {
      menuu.innerHTML += templateMenuUtamaResto(datamenu);
    });
  },
};

export default Homepage;
