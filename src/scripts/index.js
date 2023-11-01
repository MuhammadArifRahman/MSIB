import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/detail.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.menu-icon a i'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

const menu = document.querySelector('#menu-icon button');
const icon = document.querySelector('#menu-icon button i');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
  icon.classList.toggle('bi-x-lg');
  navbar.classList.toggle('open');
};

menu.addEventListener('keypress', (event) => {
  event.preventDefault();

  if (event.keyCode === 13) {
    icon.classList.toggle('bi-x-lg');
    navbar.classList.toggle('open');
  }
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
