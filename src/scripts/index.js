import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

let menu = document.querySelector('#menu-icon i')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bi-x-lg');
  navbar.classList.toggle('open')
}
