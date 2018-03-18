import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/navigation.css';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

class Navigation extends React.Component {
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
        </ButtonToolbar>
      </div>
    );
  }
}

export default Navigation;