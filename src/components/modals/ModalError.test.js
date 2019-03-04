import React from 'react';
import {shallow} from "enzyme";
import ModalError from './ModalError';

it(`renders without crashing`, () => {
  shallow(<ModalError />);
});
