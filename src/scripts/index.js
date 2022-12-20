/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './component/header/header.js';
import './component/footer/footer.js';
import './component/footer/tredmark.js';
import './component/main/mainContent.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import swRegister from './utils/sw.register';
import App from './views/app';

const app = new App({
  button: document.querySelector('.menu-toggle'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// const menuToggel = document.querySelector('.menu-toggle button');
// const drawerelement = document.querySelector('#drawer');
// menuToggel.addEventListener('click', () => {
//   drawerelement.classList.toggle('slide');
// });
