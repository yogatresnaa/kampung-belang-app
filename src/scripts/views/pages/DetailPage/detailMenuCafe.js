/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import DataCafe from '../../../data/menuscafe';
import UrlParser from '../../../routes/url-parser';
import LikeButtonInitiator from '../../../utils/like-button-initiator';
import { templateDetailmenucafe } from '../teplatecreator/template-creator';

const DetailMenucafe = {
  render() {
    return `
   
    <div class="details-cafe">
      <h1>Detail Menu</h1>
    </div>

    <div class = "likeDetaiMenu">
      <div class = "back"><a href="#/cafe"><p>Kembali</p><a/></div>  
      <div id="likeButtonContainer"></div>   
    </div>
    


        `;
  },

  afterRender() {
    // const menuscafe = DataCafe.menuCafe;
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const details = document.querySelector('.details-cafe');
    const detailmenucafe = DataCafe.menuCafe.find((menu) => menu.id == url.id);

    if (!detailmenucafe) {
      console.error('Detail menu cafe tidak ditemukan!');
      return;
    }

    details.innerHTML += templateDetailmenucafe(detailmenucafe);

    const like = document.querySelector('#likeButtonContainer');

    if (!like) {
      console.error('likeButtonContainer tidak ditemukan!');
      return;
    }

    LikeButtonInitiator.init({
      likeButtonContainer: like,
      detailMenucafe: {
        id: detailmenucafe.id,
        title: detailmenucafe.title,
        description: detailmenucafe.description,
        imageMenu: detailmenucafe.imageMenu,
        harga: detailmenucafe.harga,
      },
    });
  },
};

export default DetailMenucafe;
