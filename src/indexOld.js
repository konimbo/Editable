import html from './../example.html';
import Element from './element.js';
import Panel from './panel.js';

// application variables
var elementiframe  = document.getElementById("webPage");
var documentiframe = elementiframe.contentDocument;
var windowiframe   = elementiframe.contentWindow;

// global variables
window.panel          = new Panel("#lowerPanel");
window.currentElement = new Element(document.body); // this is the selected element

window.onload = main;

function main() {
  
  // disabling all links and forms in the document
  panel.disableLinksAndForms(documentiframe);
  
  // listening to all clicks in pages
  documentiframe.onclick = function (event) {
    // first calls the destructor method
    if(currentElement != null)
      currentElement.destructor();
    currentElement = new Element(event.srcElement);
  };
}

documentiframe.open();
documentiframe.write(html);
documentiframe.close();