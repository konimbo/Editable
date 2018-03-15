import Element from './element.js';

class Panel {
  
  constructor(query) {
    this.element           = document.querySelector(query);
    this.innerElement      = this.element.querySelector(".inner");
    this.navigationElement = this.element.querySelector(".navigation");
    this.hightlightElement = this.element.querySelector(".hightlight");
    this.addNavigation();
    this.addKeyboardNavigation();
  }
  
  importHTML() {
    
  }
  
  exportHTML() {
    
  }
  
  modifyInner(string) {
    this.innerElement.innerHTML = string;
  }
  
  disableLinksAndForms(doc) {
    
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
  
  addNavigation() {
    this.navigationElement.innerHTML = '<div class="arrows left"><</div><div class="arrows right">></div><div class="arrows top">^</div><div class="arrows bottom">v</div>';
    this.navigationElement.querySelector(".left").onclick = function () { window.currentElement.selectPreviousSibling(); }
    this.navigationElement.querySelector(".right").onclick = function () { window.currentElement.selectNextSibling(); }
    this.navigationElement.querySelector(".top").onclick = function () { window.currentElement.selectParent(); }
    this.navigationElement.querySelector(".bottom").onclick = function () { window.currentElement.selectChild(); }
  }
  
  addKeyboardNavigation() {
    window.onkeydown = function (keyboardEvent) {
      console.log(keyboardEvent);
      switch(keyboardEvent.keyCode) {
        case 37:
            // left
            window.currentElement.selectPreviousSibling();
            break;
        case 38:
            // top
            window.currentElement.selectParent();
            break;
        case 39:
            // right
            window.currentElement.selectNextSibling();
            break;
        case 40:
            // bottom
            window.currentElement.selectChild();
            break;
      }
    }
  }
  
}

export default Panel;