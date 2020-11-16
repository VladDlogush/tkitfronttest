import React, { Component } from 'react';
import { REACT_FLOW_CHART } from '@mrblenny/react-flow-chart';

class SidebarItemProperty extends Component {
  constructor({ node }) {
    super();
    this.state = node;
  }

  handleChange = (value, event) => {
    console.log(value, event.target.value);
    const state = this.state;
    state.properties.values[value] = event.target.value;
    this.setState(state);
  };

  render() {
    const { id, properties } = this.state;
    return (
      <div>
        <p>ID: {id}</p>
        <p>Title: {properties.title}</p>
        <div>
          {Object.keys(properties.values).map((value, index) => {
            return (
              <div>
                <p>{value}</p>
                <input
                  type="text"
                  value={properties.values[value]}
                  onChange={e => this.handleChange(value, e)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SidebarItemProperty;
