/* eslint-disable no-useless-constructor */
class OurSpesial extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="item_spesial">
            <h2>Layanan Kami</h2>
            <div class="item_layanan">
                 <div class="menu1">
                <h3><a href="#/cafe"><i class="fa fa-coffee" aria-hidden="true"></i>
<p>Cafe</p></a></h3>
            </div>
            <div class="menu2">
                <h3><a href="#/aula"><i class="fa fa-building" aria-hidden="true"></i>
<p>Aula Serbaguna</p></a></h3>
            </div>
            <div class="menu3">
                <h3><a href="#/restoran"><i class="fa fa-cutlery" aria-hidden="true"></i>
<p>Resto</p></a></h3>
            </div>
            <div class="menu4">
                <h3><a href="#/musolah"><i class="fa fa-building-o" aria-hidden="true"></i>
<p>Musolah</p></a></h3>
            </div>
            <div class="menu5">
                <h3><a href="#/contact"><i class="fa fa-wpforms" aria-hidden="true"></i>
                <p>Layanan Form Contac</p></a></h3>
            </div>
            <div class="menu6">
                <h3><a href="#/like"><i class="fa fa-cart-plus" aria-hidden="true"></i>
<p>Keranjang Favorit</p></a></h3>
            </div>
            </div>
           
            

        </div>
        `;
  }
}

customElements.define('our-spesial', OurSpesial);
