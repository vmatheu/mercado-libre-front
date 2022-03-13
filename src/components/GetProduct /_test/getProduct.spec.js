import React from 'react';
import toJson from 'enzyme-to-json';
import reactRouterDom from "react-router-dom";
import { shallow } from 'enzyme';
import productService from '../services/productService';
import { GetProduct, onClick } from '..';

jest.mock('../services/productService');
jest.mock('react-router-dom');

describe('<GetProduct/>', () => {

  beforeEach(() => {
    reactRouterDom.useParams = jest.fn();
    reactRouterDom.useParams.mockReturnValue({
      searchParam: "La busqueda"
    });
  });

  describe('With search product by string query', () => {
    it('should have the same ui structure', () => {
      const wrapper = shallow(<GetProduct />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
