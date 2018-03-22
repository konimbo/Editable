import React from 'react';
import ReactDOM from 'react-dom';
import WholePanel from './components/wholePanel.js'
import './styles/wholePanel.css';

// iframe initialize
let documentiframe = document.getElementById("webPage").contentDocument;
let form           = document.querySelector("form.edit_user_file");

ReactDOM.render(
  <WholePanel document={documentiframe} form={form}>
  </WholePanel>,
  document.getElementById('lowerPanel')
);