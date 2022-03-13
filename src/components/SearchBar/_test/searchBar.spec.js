import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { SearchBar } from "..";

describe("<SearchBar/>", () => {
  it("should have the same ui structure", () => {
    const wrapper = shallow(<SearchBar />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
