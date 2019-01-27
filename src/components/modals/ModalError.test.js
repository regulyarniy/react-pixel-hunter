import React from 'react';
import ReactDOM from 'react-dom';
import ModalError from './ModalError';

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<ModalError />, div);
});
