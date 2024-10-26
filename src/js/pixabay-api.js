export { getPhotos };

const BASE_URL = 'https://pixabay.com/api/';

function getPhotos(query) {
  const API_KEY = '46506725-7d59e0c0fb37faa107be781d3';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => data.hits);
}