import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '38174659-9b0c55b9f6b140ee944fe291a';

export const fetchImages = async (value, page) => {
  const params = {
    key: apiKey,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: page,
  };
  try {
    const response = await axios.get('', { params });
    return response.data.hits;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
