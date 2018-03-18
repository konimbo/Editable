import React from 'react';
import ReactDOM from 'react-dom';
import WholePanel from './components/wholePanel.js'
import './styles/wholePanel.css';

// iframe initialize
import html from './../example.html';
window.documentiframe = document.getElementById("webPage").contentDocument;
documentiframe.open();
documentiframe.write(html);
documentiframe.close();
window.onload = () => {
  disableLinksAndForms(documentiframe);
  // render panel
  ReactDOM.render(
    <WholePanel>
    </WholePanel>,
    document.getElementById('lowerPanel')
  );
}




//  =====METHODS=====

function disableLinksAndForms(doc) {
  // disable link behaviour
  doc.querySelectorAll("a").forEach(function(element) {
    element.onclick = function () {
      element.preventDefault;
      return false;
    }
  });
  // disable form submittion
  doc.querySelectorAll("form").forEach(function(element) {
    element.onsubmit = function () {
      return false;
    }
  });
}
