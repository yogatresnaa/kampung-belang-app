/* eslint-disable no-shadow */
import '../../../component/Layanan/aula/Aula';
import { templateCardAula } from '../teplatecreator/template-creator';
import aula from '../../../data/dataAula';

const Aula = {
  async render() {
    return `
        <aula-serbaguna></aula-serbaguna>
        <div class = "descripsi-aula">
        
        </div>
        `;
  },

  afterRender() {
    const deskripsi = document.querySelector('.descripsi-aula');
    const dataAula = aula;
    dataAula.forEach((dataaula) => {
      deskripsi.innerHTML += templateCardAula(dataaula);
    });
  },
};

export default Aula;
