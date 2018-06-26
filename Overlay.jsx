import React, { Component } from 'react';
import './Overlay.css'

class Overlay extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="overlay-container" style={this.props.style}>
          <span className="close-overlay" onClick={this.props.onCloseOverlay}>&#x2715;</span>
          <div className="overlay-content">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;