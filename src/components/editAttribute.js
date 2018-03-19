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
  
  handleChange() {
    let currentValue = document.getElementById(this.uniqueID()).value;
    if(this.props.attribute == "Text") {
      this.state.selectedNode.textContent = currentValue;
    } else {
      this.state.selectedNode.setAttribute(this.props.attribute, currentValue);
    }
  }
  
  uniqueID() {
    return "formKey[" + this.props.attribute + "]"
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