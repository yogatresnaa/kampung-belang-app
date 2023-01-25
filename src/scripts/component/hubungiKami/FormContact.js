/* eslint-disable lines-between-class-members */
/* eslint-disable no-useless-constructor */
class FormContact extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="form">
        <div class="maps-location">
            <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q= Kampung Belang Cafe & Resto Jl. Mandor Tadjir No.184, Curug, Kec. Bojongsari, Kota Depok, Jawa Barat 16517&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">embed code google maps</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>
        </div>

      <div class="form-contact">
        <h2>Hubungi Kami</h2>
        <form action="#" method="#">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nama Lengkap</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nama anda">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">No.Telp/Ponsel</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="no.telp/ponsel">
        </div>

         <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Subjek</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subjek">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Pesan Anda</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <input class="btn color" type="submit" value="Mengirim Pesan">
        </form>

        


      </div>  
    </div>
       
 
    `;
  }
}
customElements.define('form-contact', FormContact);
