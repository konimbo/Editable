import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Panel } from 'react-bootstrap';
import '../styles/mainPanel.css';

import EditAttribute from './editAttribute.js';

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedNode: this.props.selectedNode
    };
  }
  
  getSelectedNodeAttributes() {
    // returns an object with the edit allowed attributes
    // or an empty object
    let selectedNode     = this.state.selectedNode;
    let selectedNodeType = selectedNode.nodeType;
    
    if(selectedNodeType == Node.TEXT_NODE) {
      return {
        "Text": selectedNode.textContent
      }
    } else if(selectedNodeType == Node.ELEMENT_NODE) {
      
      let returnObject = {};
      let attributes   = selectedNode.attributes;
      for(let i = 0; i <= attributes.length-1; i++) {
        let currentAttribute = attributes[i];
        returnObject[currentAttribute.name] = currentAttribute.value
      }
      // add the text attribute
      if(selectedNode.childElementCount == 0 && this.getSelectedNodeTagName() != "IMG") {
        returnObject["Text"] = selectedNode.textContent;
      }
      
      // FIXME slices it with the allowed attributes for this kind of user
      // =====
      // FIXME translates the attributes to the selected language
      // =====
      
      return returnObject;
      
    } else {
      return {};
    }
  }
  
  getSelectedNodeTagName() {
    return this.state.selectedNode.tagName;
  }
  
  render() {
    if(this.state.selectedNode == null) {
      return "Please select a node first [" + Date() + "}";
    } else {
      let attrs = this.getSelectedNodeAttributes();
      return (
        <div id="mainPanel">
          <Panel bsStyle="info">
            <Panel.Heading>{this.getSelectedNodeTagName()} Tag Selected</Panel.Heading>
            <Panel.Body>
            {Object.keys(attrs).map(currentKey => 
                <EditAttribute selectedNode={this.state.selectedNode} label={currentKey} attribute={currentKey} key={currentKey+"["+attrs[currentKey]+"]"} type="text" value={attrs[currentKey]}></EditAttribute>
            )}
            </Panel.Body>
          </Panel>
          
        </div>
      );
    }
  }
}

export default MainPanel;