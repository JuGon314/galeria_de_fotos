export function filterPhotos(photos, searchTerm) {
  const term = searchTerm.toLowerCase();

  return photos.filter(photo =>
    photo.nome.toLowerCase().includes(term)
  );
}