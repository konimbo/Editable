import React from 'react';
import ReactDOM from 'react-dom';
import WholePanel from './components/wholePanel.js'
import './styles/wholePanel.css';

// iframe initialize
let iframe         = document.getElementById("webPage")
let form           = document.querySelector("form.edit_user_file");

ReactDOM.render(
  <WholePanel iframe={iframe} form={form}>
  </WholePanel>,
  document.getElementById('lowerPanel')
);