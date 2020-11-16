import React from 'react';
import { activeNode } from '../constants';
const Node = ({ node, handleClickEvent }) => {
  return (
    <div className="node" onClick={() => handleClickEvent(activeNode, node)}>
      {node.properties.title}
    </div>
  );
};

class NodeInnerCustom extends React.Component {
  constructor({ node, config }) {
    super();
    this.node = node;
    this.config = config;
  }

  handleClickEvent(activeNode, node) {
    activeNode.sidebar.updateSidebar(node);
  }

  render() {
    switch (this.node.type) {
      case 'command':
        return (
          <Node node={this.node} handleClickEvent={this.handleClickEvent} />
        );
      case 'state':
        return (
          <Node node={this.node} handleClickEvent={this.handleClickEvent} />
        );
      case 'action':
        return (
          <Node node={this.node} handleClickEvent={this.handleClickEvent} />
        );
      case 'condition':
        return (
          <Node node={this.node} handleClickEvent={this.handleClickEvent} />
        );

      default:
        return <div></div>;
    }
  }
}

export default NodeInnerCustom;
