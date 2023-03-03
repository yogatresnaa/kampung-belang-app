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
    <p>Aneka minuman dan cemilan yang menggugah selera yang akan membuat mood kalian kembali hidup, di dukung dengan suasanan yang nyaman. cocok untuk ngobrol-ngobrol atau untuk sekedar mengerjakan tugas kuliah</p>
    </div>

    </div>

    
    `;
  }
}

customElements.define('banner-image', Banner);
