// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryMarkUp = galleryItems.map(imageItem => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${imageItem.original}">
       <img class="gallery__image" src="${imageItem.preview}" alt="${imageItem.description}" />
    </a>
 </li>`
}).join('')

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryMarkUp;

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

