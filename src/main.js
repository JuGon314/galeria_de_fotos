import { photos } from "./data/photos.js";
import { renderGallery } from "./ui/render.js";
import { filterPhotos } from "./services/gallery.js";

const searchInput = document.getElementById("searchInput");

// Render inicial
renderGallery(photos);

// Busca em tempo real
searchInput.addEventListener("input", event => {
  const searchTerm = event.target.value;
  const filteredPhotos = filterPhotos(photos, searchTerm);
  renderGallery(filteredPhotos);
});