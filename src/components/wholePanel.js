import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './mainPanel.js';
import Navigation from './navigation.js';
import SidePanel from './sidePanel.js';

class WholePanel extends React.Component {
  render() {
    return (
      <div id="wholePanel">
        <div className="left">
          <Navigation></Navigation>
          <MainPanel></MainPanel>
        </div>
        <div className="right">
          <SidePanel></SidePanel>
        </div>
      </div>
    );
  }
}

export default WholePanel;