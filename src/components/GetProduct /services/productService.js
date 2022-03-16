import axios from 'axios';
import { PRODUCT_SERVICE_ENDPOINT_ID } from '../../constants';

const transformProductSearch = (respuesta) => ({
    id: respuesta.item.id,
    title: respuesta.item.title,
    currency: respuesta.item.price.currency,
    amount: respuesta.item.price.amount,
    decimals: respuesta.item.price.decimals,
    picture: respuesta.item.picture,
    condition: respuesta.item.condition,
    freeShipping: respuesta.item.freeShipping,
    description: respuesta.item.description
})



export const findProductById = async (search) => {
  const productServiceEnpoint = PRODUCT_SERVICE_ENDPOINT_ID;
  const data = await axios.get(`${productServiceEnpoint}/${search}`)
    .then(response => ({
      item: transformProductSearch(response.data),
      categories: response.data.categories,
    }))
    .catch(error => {
      console.error(error)
      return []
    });
  return data;
};

export default { findProductById };
