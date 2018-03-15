// import Panel from './panel.js';

class Element {
  
  constructor(element) {
    this.changeElement(element);
  }
  
  changeElement(newElement) {
    if(newElement != undefined) {
      this.destructor();
      // sets the new element
      this.element = newElement;
      console.log(newElement);
      this.styleElement();
      this.addAttributesToPanel();
    } else {
      alert("element undefined");
    }
  }
  
  destructor() {
    // remove the selected element styling if it has
    // if(this.element != undefined)
    //   this.styleElement(false);
  }
  
  selectParent() {
    this.changeElement(this.element.parentNode);
  }
  
  selectChild() {
    this.changeElement(this.element.childNodes[0]);
  }
  
  selectNextSibling() {
    this.changeElement(this.element.nextSibling);
  }
  
  selectPreviousSibling() {
    this.changeElement(this.element.previousSibling);
  }
  
  modifyAttribute(attr, value) {
    this.element.setAttribute(attr, value);
  }
  
  editContent() {
    this.element.contentEditable = "true";
  }
  
  unEditContent() {
    this.element.contentEditable = "false";
  }
  
  styleElement() {
    if(this.element.style != undefined) {
      // if (typeof bool == "undefined")
      //   bool = false;
      // let style = (bool) ? "5px solid green" : "";
      let locationVariable = this.element.getBoundingClientRect();
      panel.hightlightElement.style.top  = locationVariable.top + "px";
      panel.hightlightElement.style.left = locationVariable.left + "px";
      panel.hightlightElement.style.width = locationVariable.width + "px";
      panel.hightlightElement.style.height = locationVariable.height + "px";
    }
  }
  
  addAttributesToPanel() {
    // element.childNodes
    // if childNodes == 0 then its like img tag (no closing)
    // if childNodes all have nodeType == 3 (#text, see the docs) then it is like an "a" tag
    // if childNodes has node with nodeType == 1 its like a div
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    var string = "<form id=\"\"><table>";
    let attributes = this.element.attributes;
    if(attributes != undefined) {
      for(let i = 0; i <= attributes.length-1; i++) {
        string += "<tr><td>" + attributes[i].name + "</td><td><input class=\"changeable\" value=\"" + attributes[i].value + "\"></td></tr>";
      }
    }
    let currentValue = this.addValueToAttributes();
    if(currentValue != "") {
      string += "<tr><td>Value</td><td><textarea class=\"changeable\" style=\"width:500px;height:100px;\">" + currentValue + "</textarea></td></tr>"
    }
    string += "</table>";
    panel.modifyInner(string);
  }

  addValueToAttributes() {
    let childNodes = this.element.childNodes;
    if(childNodes.length == 0) {
      return "";
    } else if (childNodes.length == 1 && childNodes[0].nodeType == 3) {
      return childNodes[0].nodeValue;
    } else {
      return "";
    }
  }


}
  
export default Element;