import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class EditAttribute extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      attribute: this.props.attribute,
      key: this.props.attribute,
      label: this.props.label,
      value: this.props.value,
      placeholder: this.props.placeholder,
      type: this.props.type
    }
  }
  handleChange() {
    let currentValue = document.getElementById(this.uniqueID()).value;
    this.setState({
      value: currentValue
    });
    if(this.state.attribute == "Text") {
      window.selectedNode.textContent = currentValue;
    } else {
      window.selectedNode.setAttribute(this.state.attribute, currentValue);
    }
  }
  uniqueID() {
    return "formKey[" + this.state.attribute + "]"
  }
  render() {
    return (
      <FormGroup controlId={this.uniqueID()}>
        <ControlLabel>{this.state.label}</ControlLabel>
        <FormControl type={this.state.type} placeholder={this.state.placeholder} value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleChange}/>
      </FormGroup>
    );
  }
}

export default EditAttribute;