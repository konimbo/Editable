// "use strict";
import html from './../example.html';

var elementiframe  = document.getElementById("webPage");
var documentiframe = elementiframe.contentDocument;
var windowiframe   = elementiframe.contentWindow;
var panel = document.querySelector("#lowerPanel .inner");

window.onload = attachEventHandler;

function attachEventHandler () {
  // disable link behaviour
  documentiframe.querySelectorAll("a").forEach(function(element) {
    element.onclick = function () {
      element.preventDefault;
      return false;
    }
  });
  // listening to all clicks in pages
  documentiframe.onclick = function (event) {
    var elementClicked = event.srcElement;
    addAttributesToPanel(elementClicked);
  };
}

function addAttributesToPanel(element) {
  var string = "<table>";
  let attributes = element.attributes;
  for(let i = 0; i <= attributes.length-1; i++) {
    string += "<tr><td>" + attributes[i].name + "</td><td><input value=\"" + attributes[i].value + "\"></td></tr>";
  }
  string += "</table>";
  modifyPanel(string);
}

function modifyPanel(string) {
  panel.innerHTML = string;
}


documentiframe.open();
documentiframe.write(html);
documentiframe.close();