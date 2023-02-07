/* eslint-disable import/newline-after-import */
/* eslint-disable spaced-comment */
import Homepage from '../views/pages/HomePage/homepage';
import KpCace from '../views/pages/layanan/cafe';
import RestoPage from '../views/pages/layanan/resto-page';
import DetailMenucafe from '../views/pages/DetailPage/detailMenuCafe';
import Aula from '../views/pages/layanan/aulaSerbaguna';
import ContactForm from '../views/pages/contactPage/ContactPage';
import DataCustomer from '../views/pages/contactPage/datacustomer';
const routes = {
  '/': Homepage, //default page
  '/home': Homepage,
  '/cafe': KpCace,
  '/restoran': RestoPage,
  '/detailmenucafe/:id': DetailMenucafe,
  '/aula': Aula,
  '/contact': ContactForm,
  '/datacustomer': DataCustomer,
};

export default routes;
