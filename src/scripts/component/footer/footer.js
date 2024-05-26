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
          <h2>Kunjungi Medsos Kami</h2>
          
            <a href="https://web.facebook.com/profile.php?id=100063612998630" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <a href="https://www.instagram.com/kampungbelangofficial/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://bit.ly/3ZGg8J8" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
        </div>

        <div>
        <p>   <p>
        </div>
    </footer>
    
    `;
  }
}

customElements.define('footer-section', Footer);
