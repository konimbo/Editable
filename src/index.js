// "use strict";
import html from './../example.html';
// import Element from './element.js';

var elementiframe  = document.getElementById("webPage");
var documentiframe = elementiframe.contentDocument;
var windowiframe   = elementiframe.contentWindow;
var panel = document.querySelector("#lowerPanel .inner");
var currentElement = null;

window.onload = main;

function main() {
  
  disableLinksAndForms(documentiframe);
  
  // listening to all clicks in pages
  documentiframe.onclick = function (event) {
    let elementClicked = event.srcElement;
    currentElement = new Element(event.srcElement);
    // addAttributesToPanel(elementClicked); // currently disabled
    // elementClicked.contentEditable="true"; // this line makes it editable by the browser, but its makes alot of trouble
  };
}

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

function addAttributesToPanel(element) {
  // element.childNodes
  // if childNodes == 0 then its like img tag (no closing)
  // if childNodes all have nodeType == 3 (#text, see the docs) then it is like an "a" tag
  // if childNodes has node with nodeType == 1 its like a div
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  var string = "<form id=\"\"><table>";
  let attributes = element.attributes;
  for(let i = 0; i <= attributes.length-1; i++) {
    string += "<tr><td>" + attributes[i].name + "</td><td><input class=\"changeable\" value=\"" + attributes[i].value + "\"></td></tr>";
  }
  let currentValue = addValueToAttributes(element);
  if(currentValue != "") {
    string += "<tr><td>Value</td><td><textarea class=\"changeable\" style=\"width:500px;height:100px;\">" + currentValue + "</textarea></td></tr>"
  }
  string += "</table>";
  modifyPanel(string);
}

function addValueToAttributes(element) {
  let childNodes = element.childNodes;
  if(childNodes.length == 0) {
    return "";
  } else if (childNodes.length == 1 && childNodes[0].nodeType == 3) {
    return childNodes[0].nodeValue;
  } else {
    return "";
  }
}


function modifyPanel(string) {
  panel.innerHTML = string;
}



documentiframe.open();
documentiframe.write(html);
documentiframe.close();