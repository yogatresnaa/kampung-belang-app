/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable import/named */
import '../../../component/Dashboard/sidebarDashboar';
import { tempalteTableDataCustomer } from '../teplatecreator/template-creator';
import getForm from '../../../data/dataPelanggan';

const DataCustomer = {
  async render() {
    return `
    <div class = "Dashboar-utama" >
      <h1> SELAMAT DATANG ADMIN </h1>
        <div class="dashboard-restauran">
          <dashboar-sidebar></dashboar-sidebar>
          <div class=" main-content-dashboar">
            <div class ="table">
            </div>
          </div>
        </div>
    </div>

  
    `;
  },

  async afterRender() {
    const Datacustomers = await getForm();
    const tableCustomer = document.querySelector('.table');
    tableCustomer.innerHTML += tempalteTableDataCustomer(Datacustomers.data.customers);
  },
};

export default DataCustomer;
