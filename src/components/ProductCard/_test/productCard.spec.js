import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ProductCard from '..';

describe('<ProductCard/>', () => {
  describe('should be product card', () => {
    it('should have the same ui structure with one product', () => {
      const product = {
        id: "id_test",
        title: "Relojes Por Mayor Digitales Imantados Unisex ( 5 Unidades )",
        amount: 3087.5,
        currency: "CLP",
        decimals: 20,
        picture: "http://miImagenNBonita.cl",
        condition: "condition",
        freeShipping: true
      }

      const wrapper = shallow(<ProductCard {...product} />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
