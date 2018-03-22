import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class EditAttribute extends React.Component {
  
  constructor(props) {
    super(props);
    // bindings
    this.handleChange = this.handleChange.bind(this);
    // state
    this.state = {
      selectedNode: this.props.selectedNode
    }
    
  }
  
  createObjectURL(object) {
    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
  }
  
  handleChange() {
    let currentInput = document.getElementById(this.uniqueID());
    let currentValue = currentInput.value;
    let liquidInput  = document.getElementById(this.props.id);
    
    if(this.props.attribute == "textContent") {
      this.state.selectedNode.textContent = currentValue;
      liquidInput.setAttribute("value", currentValue);
    } else if (this.props.attribute == "src") {
      liquidInput.files = currentInput.files;
      this.state.selectedNode.setAttribute(this.props.attribute, this.createObjectURL(currentInput.files[0]));
    } else {
      this.state.selectedNode.setAttribute(this.props.attribute, currentValue);
      liquidInput.setAttribute("value", currentValue);
    }
  }
  
  uniqueID() {
    return "formKey[" + this.props.id + "]"
  }
  
  render() {
    return (
      <FormGroup controlId={this.uniqueID()}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl type={this.props.type} placeholder={this.props.placeholder} defaultValue={this.props.value} onChange={this.handleChange} onKeyUp={this.handleChange}/>
      </FormGroup>
    );
  }
}

export default EditAttribute;