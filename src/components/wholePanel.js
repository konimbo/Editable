import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './mainPanel.js';
import Navigation from './navigation.js';
import SidePanel from './sidePanel.js';

class WholePanel extends React.Component {
  render() {
    // makes the mainPanel a global variable so it could be accessed from anywhere
    window.mainPanel = <MainPanel></MainPanel>;
    return (
      <div id="wholePanel">
        <div className="left">
          <Navigation></Navigation>
          {mainPanel}
        </div>
        <div className="right">
          <SidePanel></SidePanel>
        </div>
      </div>
    );
  }
}

export default WholePanel;