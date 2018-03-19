import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './mainPanel.js';
import Navigation from './navigation.js';
import SidePanel from './sidePanel.js';
import html from '../../example.html'; // FIXME delete when adding DB

class WholePanel extends React.Component {
  
  constructor(props) {
    super(props);
    this.writeToDocument = this.writeToDocument.bind(this);
    this.disableLinksAndForms = this.disableLinksAndForms.bind(this);
    
    this.state = {
      document: this.props.document,
      selectedNode: null
    }
    
    this.writeToDocument(html);
    
  }
  
  writeToDocument(content) {
    // first clears the selected node
    this.setState({ selectedNode: null });
    // writes to the document
    let doc = this.state.document;
    doc.open();
    doc.write(content);
    doc.close();
    // when document ready attaches the behaviour
    doc.onreadystatechange = () => {
      console.log(Date() + doc.readyState);
      if (doc.readyState === 'complete') {
        // actions to take when loading completed
        this.disableLinksAndForms();
        this.addDocumentClickEvent();
      }
    };
  }
  
  disableLinksAndForms() {
    let doc = this.state.document;
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
  
  addDocumentClickEvent() {
    // add event listener for click a node inside the iframe
    this.state.document.onclick = (event) => {
      this.setState({
        selectedNode: event.srcElement
      });
    };
  }
  
  render() {
    return (
      <div id="wholePanel">
        <div className="left">
          <Navigation document={this.state.document} writeToDocument={this.writeToDocument}></Navigation>
          <MainPanel selectedNode={this.state.selectedNode} key={this.state.selectedNode}></MainPanel>
        </div>
        <div className="right">
          <SidePanel></SidePanel>
        </div>
      </div>
    );
  }
}

export default WholePanel;