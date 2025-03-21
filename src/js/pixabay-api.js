const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '?key=49168840-e3c83c6477977e837e7a2b39b';

export function fetchFotoCard(query) {
  const searchParams = new URLSearchParams({
    q: query.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${API_KEY}&${searchParams}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}
