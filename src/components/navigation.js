import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/navigation.css';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import ImportExport from './importExport.js';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      document: this.props.document,
      writeToDocument: this.props.writeToDocument
    }
  }
  
  render() {
    return (
      <div id="navigation">
        <ButtonToolbar>
          <ButtonGroup>
            <Button>
              <Glyphicon glyph="arrow-left" />
            </Button>
            <Button>
            <Glyphicon glyph="arrow-right" />
            </Button>
            <Button>
              <Glyphicon glyph="arrow-up" />
            </Button>
            <Button>
              <Glyphicon glyph="arrow-down" />
            </Button>
          </ButtonGroup>
            <ImportExport document={this.state.document} writeToDocument={this.state.writeToDocument}/>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Navigation;