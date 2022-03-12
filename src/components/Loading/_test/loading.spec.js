import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Loading from '..';

describe('<Loading/>', () => {
  describe('With rendered loading when have active parameter', () => {
    it('should have the same ui structure', () => {
      const wrapper = shallow(<Loading loading />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('With rendered loading empty when not have active parameter', () => {
    it('should have the same ui structure', () => {
      const wrapper = shallow(<Loading />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
