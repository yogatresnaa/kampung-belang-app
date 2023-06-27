/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import menuscafe from '../../../data/menuscafe';
import UrlParser from '../../../routes/url-parser';
import { templateDetailmenucafe } from '../teplatecreator/template-creator';

const DetailMenucafe = {
  render() {
    return `
   
    <div class="details-cafe">
     <h1>Detail Menu</h1>
        </div>

        <div class = "back">
            <a href="#/cafe"><p>Kembali</p><a/>
        </div>
        `;
  },

  afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const details = document.querySelector('.details-cafe');
    const detailmenucafe = menuscafe.filter((menu) => menu.id == url.id);
    details.innerHTML += templateDetailmenucafe(detailmenucafe[0]);
  },
};

export default DetailMenucafe;
