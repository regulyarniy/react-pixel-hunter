import React from "react";
import { shallow } from "enzyme";
import Stats from "./Stats";

it(`renders without crashing`, () => {
  shallow(<Stats />);
});
