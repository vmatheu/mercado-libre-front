import axios from 'axios';
import { PRODUCT_SERVICE_ENDPOINT } from '../constants';

export const findProductBySearch = async (search) => {
  const productServiceEnpoint = PRODUCT_SERVICE_ENDPOINT['development'].url;
  const data = await axios.get(`${productServiceEnpoint}${search}`)
    .then(response => (response.data))
    .catch(error => ([]));
  return data;
};

export default { findProductBySearch };
