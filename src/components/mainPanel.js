import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class MainPanel extends React.Component {
  render() {
    return (
      <div id="mainPanel">
        Main Panel
        <br />
        Here we will enter all selected node values
        <br />
        <Button>BlaBla</Button>
      </div>
    );
  }
}

export default MainPanel;