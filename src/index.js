import React from 'react';
import ReactDOM from 'react-dom';
import WholePanel from './components/wholePanel.js'
import './styles/wholePanel.css';

// iframe initialize
let documentiframe = document.getElementById("webPage").contentDocument;

ReactDOM.render(
  <WholePanel document={documentiframe}>
  </WholePanel>,
  document.getElementById('lowerPanel')
);