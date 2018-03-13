function element(currentElement) {
  // this.element = doc.querySelector(query)[0];
  this.element = currentElement;
  
  this.selectParent = function() {
    this.element = this.element.parentNode;
  };
  
  this.selectChild = function () {
    this.element = this.element.childNodes[0];
  };
  
  this.selectNextSibling = function () {
    this.element = this.element.nextSibling;
  };
  
  this.selectPreviousSibling = function () {
    this.element = this.element.previousSibling;
  };
  
  this.modifyAttribute = function (attr, value) {
    debugger;
    this.element.setAttribute(attr, value);
  };
  
  this.editContent = function () {
    this.element.contentEditable = "true";
  };
  
  this.unEditContent = function () {
    this.element.contentEditable = "false";
  };
  
}

export default element;