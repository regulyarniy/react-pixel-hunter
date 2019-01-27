import React from 'react';
import ReactDOM from 'react-dom';
import ModalConfirm from './ModalConfirm';

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<ModalConfirm />, div);
});
