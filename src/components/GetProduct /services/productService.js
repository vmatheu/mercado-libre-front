import axios from 'axios';
import { PRODUCT_SERVICE_ENDPOINT_ID } from '../../constants';

const transformProductSearch = (product) => ({
    id: product.item.id,
    title: product.item.title,
    currency: product.item.price.currency,
    amount: product.item.price.amount,
    decimals: product.item.price.decimals,
    picture: product.item.picture,
    condition: product.item.condition,
    freeShipping: product.item.free_shipping
})



export const findProductById = async (search) => {
  const productServiceEnpoint = PRODUCT_SERVICE_ENDPOINT_ID.development.url;
  const data = await axios.get(`${productServiceEnpoint}${search}`)
    .then(response => transformProductSearch(response.data))
    .catch(error => ([]));
  return data;
};

export default { findProductById };
