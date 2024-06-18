import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

export const fetchProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

export const createProduct = async (product: any) => {
  const { data } = await api.post('/products', product);
  return data;
};
