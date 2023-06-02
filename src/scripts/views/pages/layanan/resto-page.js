import '../../../component/Layanan/restoran/Resto';
import MenuPakets from '../../../data/MenuPaket';
import menuscafe from '../../../data/menuscafe';
import '../../../component/home/profile';
import '../../../component/home/ourSpesial';
import { templateMenuUtamaResto, templateMenuCafe } from '../teplatecreator/template-creator';

const RestoPage = {
  async render() {
    return `
        <resto-page></resto-page><br><br>
        <div class = judul>
        <h1>Sajian Menu Spesial Dari RESTO KAMPUNG BELANG</h1>
        </div>
        <profil-singkat></profil-singkat>
        <our-spesial></our-spesial>
        <div class = "menus">
        </div>
        <div class="menu-cafe">
        </div>
        `;
  },
  afterRender() {
    const menusresto = MenuPakets;
    const resto = document.querySelector('.menus');
    menusresto.forEach((menu) => {
      resto.innerHTML += templateMenuUtamaResto(menu);
    });

    const datamenus = menuscafe;
    const menuCafe = document.querySelector('.menu-cafe');
    datamenus.forEach((datamenu) => {
      menuCafe.innerHTML += templateMenuCafe(datamenu);
    });
  },
};

export default RestoPage;
