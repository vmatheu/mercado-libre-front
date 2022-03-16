import axios from "axios";
import { PRODUCT_SERVICE_ENDPOINT_SEARCH_QUERY } from "../../constants";

const transformProductSearch = (data) =>
  data.items.map((item) => ({
    id: item.id,
    title: item.title,
    currency: item.price.currency,
    amount: item.price.amount,
    decimals: item.price.decimals,
    picture: item.picture,
    condition: item.condition,
    freeShipping: item.freeShipping,
  }));

export const findProductBySearch = async (search) => {
  const data = await axios
    .get(`${PRODUCT_SERVICE_ENDPOINT_SEARCH_QUERY}?q=${search}`)
    .then((response) => {
      return {
        items: transformProductSearch(response.data),
        categories: response.data.categories,
      };
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
  return data;
};

export default { findProductBySearch };
