import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items"; 


const images = galleryItems.map(item => ({
  src: item.original,
  title: item.description
}));


const gallery = new SimpleLightbox('.gallery a', {
  items: images
});