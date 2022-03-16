const env = process.env.REACT_APP_STAGE 

const ApiUrl = {
  test: 'http://localhost:8882',
  development: 'http://localhost:3001'
}[env]

const PRODUCT_SERVICE_ENDPOINT_SEARCH_QUERY = `${ApiUrl}/api/items`
const PRODUCT_SERVICE_ENDPOINT_ID =  `${ApiUrl}/api/items`

export {
  PRODUCT_SERVICE_ENDPOINT_SEARCH_QUERY,
  PRODUCT_SERVICE_ENDPOINT_ID
};
