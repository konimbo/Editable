class Panel {
  
  constructor(query) {
    this.element = document.querySelector(query);
  }
  
  importHTML() {
    
  }
  
  exportHTML() {
    
  }
  
  modify(string) {
    this.element.innerHTML = string;
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
  
}

export default Panel;