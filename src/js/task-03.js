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
const allGallery = document.querySelector('.gallery');
const createdGallery = images.map(({url, alt})=>
  `<li>
  <img class="item" src="${url}" alt="${alt}" width=400px heigth=200px>
  </li>`).join('');
allGallery.style.display = "flex";
allGallery.style.justifyContent = "center";
allGallery.style.alignItem = "center";
allGallery.style.gap = "30px";
allGallery.style.flexDirection = "column";
allGallery.style.listStyle = "none";
allGallery.insertAdjacentHTML('beforeend', createdGallery);
const imageStyle = document.querySelectorAll('.item');