/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
class CafeInfo extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <br><br><br>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner narasi">
    <div class="carousel-item active ">
      <p class="d-block w-100">" Hidup yang tidak pernah diperjuangkan, tidak akan pernah dimenangkan."</p>
    </div>
    <div class="carousel-item">
      <p class="d-block w-100">" Hidup ini begitu singkat, maka perjuangkanlah apa yang kamu inginkan demi kebaikan mu ataupun kebaikan untuk sesama." </p>
    </div>
    <div class="carousel-item">
        <p class="d-block w-100">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ex numquam quis tempora a culpa aspernatur rerum, assumenda eius autem."</p>
    </div>
     <div class="carousel-item">
        <p class="d-block w-100">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ex numquam quis tempora a culpa aspernatur rerum, assumenda eius autem."</p>
    </div>
     <div class="carousel-item">
        <p class="d-block w-100">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ex numquam quis tempora a culpa aspernatur rerum, assumenda eius autem." </p>
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

customElements.define('cafe-info', CafeInfo);
