import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <div id="navigation">
        Navigation: left | right | top | bottom
        <hr />
      </div>
    );
  }
}

export default Navigation;