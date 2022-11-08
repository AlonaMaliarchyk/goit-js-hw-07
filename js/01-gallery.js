import { galleryItems } from './gallery-items.js';
//const basicLightbox = require('basiclightbox')
//import * as basicLightbox from 'basiclightbox'


// Change code below this line
const galleryContainer = document.querySelector('.gallery');
let setImg = [];

for (let img of galleryItems) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add("gallery__item", "gallery__link");
    const imgGallery = document.createElement('img');
    imgGallery.classList.add("gallery__image");
    imgGallery.setAttribute('src', img.preview);
    imgGallery.setAttribute('alt', img.description);
    galleryItem.append(imgGallery);
    setImg.push(galleryItem);
}
galleryContainer.append(...setImg);

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    basicLightbox.create(`
		<img width="1400" height="900" src="${galleryItems[1].original}">
	`
    ).show()
})

