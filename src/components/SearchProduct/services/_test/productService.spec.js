import { findProductBySearch } from '../productService';
import axios from 'axios';

jest.mock('axios');

describe('ProductService ', () => {
  beforeEach(() => {
    axios.get = jest.fn(() => Promise.resolve());
  });

  it('should be return object when calling getProductById', async () => {
    const result = await findProductBySearch('1');
    expect(result).not.toBeNull();
  });
});
