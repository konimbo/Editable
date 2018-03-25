import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/navigation.css';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import serialize from 'form-serialize';
// import ImportExport from './importExport.js';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
    
    this.state = {
      document: this.props.document,
      form: this.props.form,
      writeToDocument: this.props.writeToDocument,
    }
  }
  
  handleSave() {
    this.state.form.submit();
    // this.submitAjaxForm();
  }
  
  submitAjaxForm() {
    let form = this.state.form;
    fetch(form.getAttribute("action"), {
      body: serialize(form), // JSON.stringify(data), // must match 'Content-Type' header
      headers: {
      },
      method: form.getAttribute("method") // *GET, POST, PUT, DELETE, etc.
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log(response.json()))
  }
  
  render() {
    return (
      <div id="navigation">
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={this.handleSave}>
              <Glyphicon glyph="floppy-save" />
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Navigation;