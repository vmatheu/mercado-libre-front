import { findProductBySearch } from '../productService';
import axios from 'axios';

jest.mock('axios');


const endpointResponse = {
  data: 
    {
      "author": {
      "name": "Victor",
      "lastname": "Matheu"
      },
      "items": [{
        "id": "id_test",
        "title": "Flor",
        "price": {
          "currency": "CLP",
          "amount": 3000,
          "decimals": 0
        },
        "picture": "http://la_imagen",
        "condition": "condition",
        "freeShipping": true
      }]
    }
  
}

describe('ProductService ', () => {
  beforeEach(() => {
    axios.get.mockImplementation(() => Promise.resolve(endpointResponse))
  });

  it('should be return object when calling getProductBySearch', async () => {
    const result = await findProductBySearch('1');
    expect(result).toMatchSnapshot();
  });
});
