const createListResto = (element) => `
  <div class="card">
    <div class="card-img">
      <div class="city">
        <h4>${element.city}</h4>
      </div>
      <div class="rating">
        <i class="bi bi-star-fill"></i>
        <p>${element.rating}</p>
      </div>
      <img src="https://restaurant-api.dicoding.dev/images/small/${element.pictureId}" crossorigin="anonymous" alt="gambar restaurant ${element.name}">
    </div>
    <div class="card-body">
      <a href="/#/detail/${element.id}">${element.name}</a>
      <p>${element.description}</p>
    </div>
  </div>`;

const createDetailTamplate = (resto) => `
    <div class="image-resto">
      <h1>${resto.name}</h1>
      <img src="https://restaurant-api.dicoding.dev/images/large/${resto.pictureId}" crossorigin="anonymous" alt="hero image"> <br>
      <div id="likeButtonContainer"></div>
    </div>

    <section class="contain">
      <div class="addres">
        <div class="city">
          <h4>Kota</h4>
          <p>${resto.city}</p>
        </div>
        <div class="street">
          <h4>Alamat:</h4>
          <p>${resto.address}</p>
        </div>
      </div>
      <div class="description">
        <h2>Deskripsi</h2>
        <p>${resto.description}</p>
      </div>
      <div class="menu">
        <div class="makanan">
          <h2>Makanan</h2>
          <ul id="food"> </ul>
        </div>
        <div class="Minuman">
          <h2>Minuman</h2>
          <ul id="drink">
          </ul>
        </div>
      </div>
      <h2>Review</h2>
      <div class="review">
        
      </div>
    </section>
      `;

const createList = (food) => `
  <li>${food.name}</li>
`;

const createReview = (review) => `
<div class="card-review">
  <p class="date">${review.date}</p>
  <h4>${review.name}</h4>
  <p>${review.review}</p>
</div>
`;

const createLikeButtonTemplate = () => `
<button id="likeButton" class="tambah"><i class="bi bi-heart"></i></button>
`;

const createLikedButtonTemplate = () => `
<button id="likeButton" class="hapus"><i class="bi bi-heart-fill"></i></button>

`;

export {
  createDetailTamplate,
  createList,
  createListResto,
  createReview,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
