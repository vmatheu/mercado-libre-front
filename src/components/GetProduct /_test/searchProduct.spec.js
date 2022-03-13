import React from 'react';
import toJson from 'enzyme-to-json';
import reactRouterDom from "react-router-dom";
import { shallow } from 'enzyme';
import productService from '../services/productService';
import { SearchProduct, onClick } from '..';

jest.mock('../services/productService');
jest.mock('react-router-dom');

describe('<SearchProduct/>', () => {

  beforeEach(() => {
    reactRouterDom.useParams = jest.fn();
    reactRouterDom.useParams.mockReturnValue({
      searchParam: "La busqueda"
    });
  });

  describe('With search product by string query', () => {
    it.only('should have the same ui structure', () => {
      const wrapper = shallow(<SearchProduct />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick action', () => {
    beforeEach(() => {
      productService.findProductBySearch = jest.fn();
    });

    it('should calling product service', async () => {
      await onClick('111', jest.fn(), jest.fn());
      expect(productService.findProductBySearch).toHaveBeenCalled();
    });

    it('should calling product service when use ñ character', async () => {
      await onClick('aaañ', jest.fn(), jest.fn());
      expect(productService.findProductBySearch).toHaveBeenCalled();
    });

    it('should not calling product service when search contains not alphanumeric characters', async () => {
      await onClick('21-', jest.fn(), jest.fn());
      expect(productService.findProductBySearch).not.toHaveBeenCalled();
    });

    it('should calling product service with lower case character', async () => {
      await onClick('AAAA', jest.fn(), jest.fn());
      expect(productService.findProductBySearch).toHaveBeenCalledWith('aaaa');
    });

    it('should not calling product service when search contains alphanumeric characters but lenght is less than three', async () => {
      await onClick('1a', jest.fn(), jest.fn());
      expect(productService.findProductBySearch).not.toHaveBeenCalled();
    });

    it('should calling product service when search contains only numbers', async () => {
      await onClick('1', jest.fn(), jest.fn());
      expect(productService.findProductBySearch).toHaveBeenCalled();
    });
  });
});
