/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */

const templateMenuUtamaResto = (menu) => `

 <div class="menu-picture">
            <img src="${menu.imageMenu}" alt="...">
             <h2>${menu.title}</h2>
              <p>${menu.description}</p>
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
        <div class="descrip">
              <h2>${detailmenucafe.title}</h2>
              <h3>${detailmenucafe.description}</h3>
              <p>${detailmenucafe.harga}</p>
        </div>
  
    </div

`;

export { templateMenuUtamaResto, templateMenuCafe, templateDetailmenucafe };
