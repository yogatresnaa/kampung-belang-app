import '../../../component/Layanan/cafe/cafe-info';
import '../../../component/Layanan/cafe/banner-image';
import '../../../component/Layanan/cafe/menu-cafe';
import menuscafe from '../../../data/menuscafe';
import { templateMenuCafe } from '../teplatecreator/template-creator';

const KpCace = {
  async render() {
    return `
        <cafe-info></cafe-info>
        <banner-image></banner-image>
        <div class="menu-cafe">
        </div>
      
        
        `;
  },
  afterRender() {
    const datamenus = menuscafe;
    const menuCafe = document.querySelector('.menu-cafe');
    datamenus.forEach((datamenu) => {
      menuCafe.innerHTML += templateMenuCafe(datamenu);
    });
  },
};

export default KpCace;
