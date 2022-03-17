import React from 'react';
import toJson from 'enzyme-to-json';
import reactRouterDom from 'react-router-dom';
import { shallow } from 'enzyme';
import { SearchProduct } from '..';

jest.mock('../services/productService');
jest.mock('react-router-dom');

describe('<SearchProduct/>', () => {
  beforeEach(() => {
    reactRouterDom.useParams = jest.fn();
    reactRouterDom.useParams.mockReturnValue({
      searchParam: '',
    });
  });

  describe('With search product by string query', () => {
    it('should have the same ui structure', () => {
      const wrapper = shallow(<SearchProduct />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
