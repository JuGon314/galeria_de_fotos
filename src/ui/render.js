const galleryElement = document.getElementById("gallery");
const emptyStateElement = document.getElementById("emptyState");

export function renderGallery(photos) {
  galleryElement.innerHTML = "";

  if (photos.length === 0) {
    emptyStateElement.hidden = false;
    return;
  }

  emptyStateElement.hidden = true;

  photos.forEach(photo => {
    const card = document.createElement("div");
    card.classList.add("photo-card");

    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.nome}">
      <p class="photo-name">${photo.nome}</p>
    `;

    galleryElement.appendChild(card);
  });
}