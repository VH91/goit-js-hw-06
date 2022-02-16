const gallery = document.querySelector(".gallery")

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markup = images
  .map((image) => `<li><img class="image" src='${image.url}' alt='${image.alt}'></li>`)
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

const galleryStyle = document.querySelector(".gallery");
  galleryStyle.style.width = "auto";
  galleryStyle.style.listStyle = "none";
  galleryStyle.style.display = "flex";
  galleryStyle.style.justifyContent = "space-between";
  galleryStyle.style.padding = "0";

  
const imageStyle = document.querySelectorAll(".image");
imageStyle.forEach(function callback(image) {
  image.style.width = "205px";
  image.style.height = "120px";
  image.style.border = "0";
  image.style.display = "block";
});
