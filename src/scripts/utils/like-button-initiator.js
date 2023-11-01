import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/tamplates/tamplates-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, movie }) {
    this.likeButtonContainer = likeButtonContainer;
    this.movie = movie;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.movie;

    if (await this.isMovieExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isMovieExist(id) {
    const movie = await FavoriteRestoIdb.getResto(id);
    return !!movie;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this.movie);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this.movie.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
