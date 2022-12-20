/* eslint-disable spaced-comment */
import Homepage from '../views/pages/HomePage/homepage';
import KpCace from '../views/pages/layanan/cafe';
import RestoPage from '../views/pages/layanan/resto-page';

const routes = {
  '/': Homepage, //default page
  '/home': Homepage,
  '/cafe': KpCace,
  '/restoran': RestoPage,
};

export default routes;
