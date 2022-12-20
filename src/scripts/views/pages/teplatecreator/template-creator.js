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

    <div class = "menu-cafe-item">
        <img src="${menucafe.imageMenu}" alt="...">
        <div class="descrip">
              <h2>${menucafe.title}</h2>
              <p>${menucafe.description}<p>
              <p>${menucafe.harga}<p>
        </div>
  
    </div

`;

export { templateMenuUtamaResto, templateMenuCafe };
