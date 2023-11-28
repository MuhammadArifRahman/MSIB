import UrlParser from '../../routes/url-parser';
import { createDetailTamplate, createList, createReview } from '../tamplates/tamplates-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import TheMovieDbSource from '../../data/themoviedb-source';

const Detail = {
  async render() {
    return `

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const mainElement = document.querySelector('#mainContent');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function get() {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(xhttp.responseText);
        const resto = data.restaurant;
        const dataFood = data.restaurant.menus.foods;
        const dataDrink = data.restaurant.menus.drinks;
        const dataReview = data.restaurant.customerReviews;

        mainElement.innerHTML = createDetailTamplate(resto);

        const food = document.querySelector('#food');
        dataFood.forEach((element) => {
          food.innerHTML += createList(element);
        });

        const drink = document.querySelector('#drink');
        dataDrink.forEach((element) => {
          drink.innerHTML += createList(element);
        });

        const review = document.querySelector('.review');
        dataReview.forEach((element) => {
          review.innerHTML += createReview(element);
        });
      }
    };
    xhttp.open('GET', `https://restaurant-api.dicoding.dev/detail/${url.id}`, true);
    xhttp.send();

    const movie = await TheMovieDbSource.detailMovie(url.id);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: movie.restaurant.id,
        name: movie.restaurant.name,
        description: movie.restaurant.description,
        pictureId: movie.restaurant.pictureId,
        city: movie.restaurant.city,
        rating: movie.restaurant.rating,
        foods: movie.restaurant.menus.foods,
        drinks: movie.restaurant.menus.drinks,
      },
    });
  },
};

export default Detail;
