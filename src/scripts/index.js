import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';



let menu = document.querySelector('#menu-icon a')
let icon = document.querySelector('#menu-icon a i')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  icon.classList.toggle('bi-x-lg');
  navbar.classList.toggle('open')
}

menu.addEventListener("keypress", function(event) {
  event.preventDefault()
  if(event.keyCode === 13){
    icon.classList.toggle('bi-x-lg');
    navbar.classList.toggle('open')
  }
});

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(xhttp.responseText);
      data.restaurants.forEach(function(element) {
        document.querySelector(".container").innerHTML += `
        <div class="card">
          <div class="card-img">
            <div class="city">
              <h4>${element.city}</h4>
            </div>
            <img src="${element.pictureId}" alt="gambar restaurant ${element.name}">
            <div class="rating">
              <p>${element.rating}</p>
            </div>
          </div>
          <div class="card-body">
            <h2>${element.name}</h2>
            <p>${element.description}</p>
          </div>
        </div>
        `
      });
    }
};
xhttp.open("GET", "/data/DATA.json", true);
xhttp.send();
