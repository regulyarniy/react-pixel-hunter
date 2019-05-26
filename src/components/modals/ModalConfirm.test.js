import React from "react";
import { shallow } from "enzyme";
import ModalConfirm from "./ModalConfirm";

it(`renders without crashing`, () => {
  shallow(<ModalConfirm />);
});
