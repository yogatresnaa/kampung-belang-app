/* eslint-disable object-curly-newline */
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

export { templateMenuUtamaResto, templateMenuCafe, templateDetailmenucafe, templateCardAula };
