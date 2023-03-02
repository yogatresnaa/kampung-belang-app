/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
class BannerGalery extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="banner">
    <div class="banner-image1">
      <img src="./asset/slide3.JPG" class="img1">
    </div>

    <div class="banner-image2">
      <img src="./asset/slide4.JPG" class="img2">
    </div>

        
        
        
    </div>

    
    `;
  }
}

customElements.define('banner-galery', BannerGalery);
