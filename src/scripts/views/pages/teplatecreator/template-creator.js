/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
const templateMenuUtamaResto = (menu) => `
 <div class="menu-picture">
            <p> ${menu.menu} </p>
            <img src="${menu.imageMenu}" alt="...">
             <h2>${menu.title}</h2>
              <p>${menu.description}</p>
              <p>${menu.harga}</p>
          </div>
`;

const templateMenuCafe = (menucafe) => `

    <div class = "menu-cafe-item" >
        <img src="${menucafe.imageMenu}" alt="...">
        <div class="descrip">
             <h2>${menucafe.title}</h2>
              <p>${menucafe.harga}</p>
              <a href="#/detailmenucafe/${menucafe.id}"><p>Lihat Detail</p><a/>
              
        </div>
    </div

`;

const templateDetailmenucafe = (detailmenucafe) => `
        <div class = "detail-cafe-item">
        <img src="${detailmenucafe.imageMenu}" alt="...">
        <div class="description">
              <h2>${detailmenucafe.title}</h2>
              <h3> ${detailmenucafe.description}</h3>
              <p> Harga  ${detailmenucafe.harga}</p>
        </div>
  
    </div

`;

const templateCardAula = (aula) => `

<div class="card-aula-item">
    <img src="${aula.imageMenu}" alt="..">
    <div class="descrip-aula">
         <h3>${aula.title}</h3>
        <p> ${aula.description}</p>
    </div>

</div>
`;

// Dashboard
const tempalteTableDataCustomer = (customers) => `

<div class = "tabledatacustomer">
    <table class = "scroll">
        <thead>
            <tr>
              <th>id</th>
                <th>Nama Pelanggan</th>
                <th>No Telpon/ WA</th>
                <th>email</th>
                <th>Subjek</th>
                <th>Pesan</th>
                <th>createdAt</th>
        </thead>
        <tbody>
        ${customers.map(
          (customer) =>
            `<tr>
                <td>${customer.id}</td>
                <td>${customer.nama}</td>
                <td>${customer.noHp}</td>
                <td>${customer.email}</td>
                <td>${customer.subjek}</td>
                <td>${customer.pesan}</td>
                <td>${customer.createdAt}</td>`
        )}
        </tbody>
    </table>
<div>
`;

export { templateMenuUtamaResto, templateMenuCafe, templateDetailmenucafe, templateCardAula, tempalteTableDataCustomer };
