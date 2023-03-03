/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
class Profil extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <div class="profil">
              <div class="image-profil">
                <img src="./asset/gedung_depan.JPG" alt"gambar profil">
              </div>
              <div class="description-profil">
                <h3>Profil</h3>
                <p>Resto Kampung Belang berdiri pada tahun 2016. yang berlokasi di Jl. Mandor Tadjir No.184, Curug, Kec. Bojongsari, Kota Depok. Alhamdulillah saat ini Resto Kampung Belang masih berjalan dan terus bertumbuh. Selain menyediakan beraneka ragam menu-menu favorit, di sini kami juga menyediakan beberapa fasilitas lain demi kenyamanan pelanggan kami. Mari mampir dan singgah sejenak di kampung belang dan nikmati pelayanan yang kami berikan.</p>
              
              </div>
                
              
            </div>
        `;
  }
}

customElements.define('profil-singkat', Profil);
