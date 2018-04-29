import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './mainPanel.js';
import Navigation from './navigation.js';
import SidePanel from './sidePanel.js';
// import html from '../../example.html'; // FIXME delete when adding DB

class WholePanel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      iframe: this.props.iframe,
      document: this.props.iframe.contentDocument,
      form: this.props.form,
      selectedNode: null,
      inputs: []
    }
    this.state.iframe.onload    = this.iframeLoadedHandler.bind(this);
    this.state.document.onclick = this.iframeClickHandler.bind(this);
  }
  iframeLoadedHandler() {
    this.setState({
      ready: true
    });
  }
  iframeClickHandler(event) {
    event.preventDefault(); // disable any other bahviour
    let attribute = 'data-selector';
    let element   = event.target;
    let inputs = this.searchElementInForm(element);
    debugger;
    if(inputs.length > 0) {
      this.setState({
        selectedNode: element,
        inputs: inputs
      });
    }
    
    return false; // for forms submittions and etc...
  }
  searchElementInForm(el){
    const selectorAttribute = "data-selector";
    const doc               = this.state.document;
    const form              = this.state.form;
    let   inputs            = [];
    
    form.querySelectorAll("input[" + selectorAttribute + "]").forEach((currentInput) => {
      let currentElement = doc.querySelector(currentInput.getAttribute(selectorAttribute));
      if (currentElement === el) {
        inputs.push(currentInput);
      }
    });
    
    return inputs;
  }
  
  selectedNodeUniqueIdentifier() {
    let node = this.state.selectedNode;
    if(node == null) {
      return null;
    } else {
      return this.state.selectedNode.className; // FIXME - will work only with launchpad
    }
  }
  
  render() {
    return (
      <div id="wholePanel" data-ready={this.state.ready}>
        <div className="left">
          <Navigation document={this.state.document} form={this.state.form}></Navigation>
          <MainPanel selectedNode={this.state.selectedNode} inputs={this.state.inputs} key={this.selectedNodeUniqueIdentifier()}></MainPanel>
        </div>
        <div className="right">
          <SidePanel></SidePanel>
        </div>
      </div>
    );
  }
}

export default WholePanel;