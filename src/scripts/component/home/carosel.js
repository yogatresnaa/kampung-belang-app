/* eslint-disable lines-between-class-members */
/* eslint-disable space-before-blocks */
/* eslint-disable no-useless-constructor */
class Sliders extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./heros/slide.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./heros/slide2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./heros/slide3.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    `;
  }
}
customElements.define('slider-element', Sliders);
