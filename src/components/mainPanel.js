import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Panel } from 'react-bootstrap';
import '../styles/mainPanel.css';

import EditAttribute from './editAttribute.js';

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
    
    // add event listener for click a node inside the iframe
    documentiframe.onclick = (event) => {
      this.setState({
        selectedNode: event.srcElement
      });
      window.selectedNode = this.state.selectedNode;
    };
    
    this.state = {
      selectedNode: null
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
      returnObject["Text"] = selectedNode.textContent;
      
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
  
  getAttrsHTML() {
    let attrs = this.getSelectedNodeAttributes();
    let attrsHTML = Object.keys(attrs).map(key => 
        <EditAttribute label={key} attribute={key} key={key} type="text" value={attrs[key]}></EditAttribute>
    );
    return attrsHTML;
  }
  
  render() {
    if(this.state.selectedNode == null) {
      return "Please select a node first";
    } else {
      return (
        <div id="mainPanel">
          <Panel bsStyle="info">
            <Panel.Heading>{this.getSelectedNodeTagName()} Tag Selected</Panel.Heading>
            <Panel.Body>
              {this.getAttrsHTML()}
            </Panel.Body>
          </Panel>
          
        </div>
      );
    }
  }
}

export default MainPanel;