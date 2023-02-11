/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
class DashboarSidebar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <div class="sidebar-dashboar">
          <ul>
            <li>Data Pelanggan</li>
            <li>Data Karyawan</li>
            <li>Data Menu</li>
          </ul>
        </div>
    `;
  }
}

customElements.define('dashboar-sidebar', DashboarSidebar);
