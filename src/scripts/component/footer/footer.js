/* eslint-disable no-useless-constructor */
/* eslint-disable indent */
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <footer class="footers">
        <div class="picture-footer">
            <img src="/heros/kabel.png">
            <p>Alamat  : <br>Jl. Mandor Tadjir No.184, Curug, Kec. Bojongsari, Kota Depok, Jawa Barat 16517</p>
        </div>
        <div class="service">
            <h2>Layanan Kami:</h2>
            <ul>
                <li>Cafe</li>
                <li>Restoran</li>
                <li>Aula Serbaguna</li>
                <li>Resepsi</li>
                <li>Live Music</li>
            </ul>
        </div>
        <div class="link-medsos">
          <h2>Kunjungi Kami disini</h2>
          
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </div>

        <div>
        <p>   <p>
        </div>
    </footer>
    
    `;
  }
}

customElements.define('footer-section', Footer);
