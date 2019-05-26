import React from "react";
import { shallow } from "enzyme";
import Rules from "./Rules";

it(`renders without crashing`, () => {
  shallow(<Rules name={``} />);
});
