/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
class Banner extends HTMLElement {
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
      <img src="./asset/cemilan6.JPG" class="img1">
    </div>

    <div class="banner-image2">
      <img src="./asset/minuman8.JPG" class="img2">
    </div>
    <div class="text-banner">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem esse sapiente, blanditiis facere consequuntur delectus consectetur excepturi quia. Quisquam. A voluptatem esse sapiente, blanditiis facere consequuntur delectus consectetur excepturi quia. Quisquam</p>
    </div>
        
        
        
    </div>

    
    `;
  }
}

customElements.define('banner-image', Banner);
