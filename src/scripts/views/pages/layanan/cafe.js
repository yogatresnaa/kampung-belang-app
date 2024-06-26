import '../../../component/Layanan/cafe/cafe-info';
import '../../../component/Layanan/cafe/banner-image';
import '../../../component/Layanan/cafe/galery';
import '../../../component/Layanan/cafe/menu-cafe';
import DataCafe from '../../../data/menuscafe';
import { templateMenuCafe } from '../teplatecreator/template-creator';

const KpCace = {
  async render() {
    return `
        <cafe-info></cafe-info>
        <banner-image></banner-image>
        <div class="menucafe">
          <h3> Menu Cafe </h3>
          <div class="menu-cafe"></div>
        </div>
        <banner-galery></banner-galery>
      
        
        `;
  },
  afterRender() {
    const datamenus = DataCafe.menuCafe;
    const menuCafe = document.querySelector('.menu-cafe');
    datamenus.forEach((datamenu) => {
      menuCafe.innerHTML += templateMenuCafe(datamenu);
    });
  },
};

export default KpCace;
