import axios from 'axios';
import { PRODUCT_SERVICE_ENDPOINT } from '../constants';

const transformProductSearch = (products) => products.map(
  product => ({
    id: product.item.id,
    title: product.item.title,
    currency: product.item.price.currency,
    amount: product.item.price.amount,
    decimals: product.item.price.decimals,
    picture: product.item.picture,
    condition: product.item.condition,
    freeShipping: product.item.free_shipping
  })
);

export const findProductBySearch = async (search) => {
  const productServiceEnpoint = PRODUCT_SERVICE_ENDPOINT.development.url;
  const data = await axios.get(`${productServiceEnpoint}${search}`)
    .then(response => transformProductSearch(response.data))
    .catch(error => ([]));
  return data;
};

export default { findProductBySearch };
