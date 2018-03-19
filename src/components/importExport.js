import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Glyphicon, Modal, ControlLabel, FormControl, FormGroup, ButtonGroup } from 'react-bootstrap';

class ImportExport extends React.Component {
  constructor(props) {
    super(props);

    this.handleHideImport = this.handleHideImport.bind(this);
    this.handleHideExport = this.handleHideExport.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    
    this.state = {
      showImport: false,
      showExport: false,
      document: this.props.document,
      writeToDocument: this.props.writeToDocument
    };
  }

  handleHideImport() {
    this.setState({ showImport: false });
  }
  handleHideExport() {
    this.setState({ showExport: false });
  }
  
  saveChanges() {
    let content = document.getElementById(ImportExport.importTextareaId).value;
    this.state.writeToDocument(content);
    this.handleHideImport();
  }
  
  copyToClipboard() {
    alert("copied"); // FIXME
  }
  
  getDocumentHTML() {
    return this.state.document.documentElement.outerHTML;
  }
  
  static get importTextareaId() {
    return "importTextarea";
  }
  static get exportTextareaId() {
    return "exportTextarea";
  }
  
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button>
            <Glyphicon glyph="open" onClick={() => this.setState({ showImport: true })}/>
          </Button>
          <Button>
            <Glyphicon glyph="save" onClick={() => this.setState({ showExport: true })}/>
          </Button>
        </ButtonGroup>
        
        <Modal show={this.state.showImport} onHide={this.handleHideImport} container={this} aria-labelledby="contained-modal-title" bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Import Document
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId={ImportExport.importTextareaId}>
              <FormControl componentClass="textarea" placeholder={this.getDocumentHTML()} />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHideImport}>Close</Button>
            <Button bsStyle="primary" onClick={this.saveChanges}>Save changes</Button>
          </Modal.Footer>
        </Modal>
        
        <Modal show={this.state.showExport} onHide={this.handleHideExport} container={this} aria-labelledby="contained-modal-title" bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Export Document
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId={ImportExport.exportTextareaId}>
              <FormControl componentClass="textarea" value={this.getDocumentHTML()} readOnly="true" />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHideExport}>Close</Button>
            <Button bsStyle="primary" onClick={this.copyToClipboard}>Copy to clipboard</Button>
          </Modal.Footer>
        </Modal>
        
        
      </div>
    );
  }
}

export default ImportExport;