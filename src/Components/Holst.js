import React, { Component } from 'react';
import { activeNode } from '../constants';

class Content extends Component {
  onClick() {
    activeNode.sidebar.updateSidebar(null);
  }

  render() {
    return (
      <div className="Content" onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
