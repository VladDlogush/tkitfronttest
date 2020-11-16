import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import SidebarItemProperty from './SidebarItemProperty';

class Sidebar extends Component {
  constructor({ data, activeNode }) {
    super();
    this.nodes = data.nodes;
    activeNode.sidebar = this;
    this.state = activeNode;
  }

  updateSidebar(node) {
    this.setState({ node: node, isSelected: node == null ? false : true });
  }

  render() {
    const { node, isSelected } = this.state;
    return (
      <>
        {isSelected ? (
          <SidebarItemProperty node={node} />
        ) : (
          <div className="Sidebar">
            {this.nodes.map((node, index) => (
              <SidebarItem
                key={index}
                type={node.type}
                ports={node.ports}
                properties={node.properties}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default Sidebar;
