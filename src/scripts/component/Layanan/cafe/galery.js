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
      <img src="./heros/hero-image_2.jpg" class="img1">
    </div>

    <div class="banner-image2">
      <img src="./heros/hero-image_1.jpg" class="img2">
    </div>

        
        
        
    </div>

    
    `;
  }
}

customElements.define('banner-galery', BannerGalery);
