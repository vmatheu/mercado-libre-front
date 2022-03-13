import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ProductBox } from '..';


describe('<ProductBox/>', () => {
  describe('With search product by id', () => {
    it('should have the same ui structure', () => {
      const wrapper = shallow(<ProductBox />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
