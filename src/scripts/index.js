import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/detail.css';

require('./dataresto');

const menu = document.querySelector('#menu-icon a');
const icon = document.querySelector('#menu-icon a i');
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
