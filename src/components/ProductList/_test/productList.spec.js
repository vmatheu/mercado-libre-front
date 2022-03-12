import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ProductList from '..';

const buildProduct =
  (id, title, amount, currency, decimals, picture, condition, freeShipping) =>
  ({ id, title, amount, currency, decimals, picture, condition, freeShipping });

describe('<ProductList/>', () => {
  describe('should be list product', () => {
    it('should have the same ui structure with one product', () => {
      const products = [
        buildProduct('test_id_1', 'producto 1', 3000, 'clp', 10, 'uriimage', 'condition', true),
      ];

      const wrapper = shallow(<ProductList products={products} />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });

    it('should have the same ui structure with five product', () => {
      const products = [
        buildProduct('test_id_1', 'producto 1', 3000, 'clp', 10, 'uriimage', 'condition', true),
        buildProduct('test_id_2', 'producto 2', 3000, 'clp', 10, 'uriimage', 'condition', true),
        buildProduct('test_id_3', 'producto 3', 3000, 'clp', 10, 'uriimage', 'condition', true),
        buildProduct('test_id_4', 'producto 4', 3000, 'clp', 10, 'uriimage', 'condition', true),
        buildProduct('test_id_5', 'producto 5', 3000, 'clp', 10, 'uriimage', 'condition', true),
      ];

      const wrapper = shallow(<ProductList products={products} />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
