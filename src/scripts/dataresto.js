const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function get() {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(xhttp.responseText);
    data.restaurants.forEach((element) => {
      document.querySelector('.container').innerHTML += `
      <div class="card">
        <div class="card-img">
          <div class="city">
            <h4>${element.city}</h4>
          </div>
          <div class="rating">
            <i class="bi bi-star-fill"></i>
            <p>${element.rating}</p>
          </div>
          <img src="https://restaurant-api.dicoding.dev/images/small/${element.pictureId}" alt="gambar restaurant ${element.name}">
        </div>
        <div class="card-body">
          <a href="https://restaurant-api.dicoding.dev/detail/id/${element.id}">${element.name}</a>
          <p>${element.description}</p>
        </div>
      </div>`;
    });
  }
};
xhttp.open('GET', 'https://restaurant-api.dicoding.dev/list', true);
xhttp.send();
