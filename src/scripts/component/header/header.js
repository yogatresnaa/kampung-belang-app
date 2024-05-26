/* eslint-disable no-useless-constructor */
class HeaderNavigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <container fluid>
       <br>
    <header class="header">
      <div class="header__inner">
        <img src="/heros/kabel.png">
      </div>
      <div class="menu-toggle">
     
        <i class="fa fa-bars" aria-hidden="true" tabindex="0" ></i>
      </div>
      <nav id="drawer" class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/home">Beranda</a></li>
         
          <li class="nav__item"><a href="#">Layanan</a>
            <ul class="drop-down-menu">
                <li><a href="#/cafe">Cafe</a></li>
                <li><a href="#/restoran">Restoran</a></li>
                <li><a href="#/aula">Aula Serbaguna</a></li>
                <li><a href="#/musolah">Musolah</a></li>
            </ul>
            </li>
          <li class="nav__item"><a href="#/contact">Hubungi Kami</a></li>
          <li class="nav__item"><a href="#/like">Menu Favorit Pilihanmu</a></li>

        </ul>
      </nav>
    </header>
    </container>
    
    
 
    
    `;
  }
}

customElements.define('headers-nav', HeaderNavigation);

//  <button id="hamburgerButton">☰</button>
//  <li class='nav__item'>
//    <a href='#/Favorite'>Profile</a>
//  </li>
