import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createListResto } from '../tamplates/tamplates-creator';

const Like = {
  async render() {
    return `    
    <h1 class"title">Restoran Favorite</h1>
    <section class="container">
      
    </section>`;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const moviesContainer = document.querySelector('.container');
    resto.forEach((movie) => {
      moviesContainer.innerHTML += createListResto(movie);
    });
  },
};

export default Like;
