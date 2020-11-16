import React from 'react';
import { mapValues } from 'lodash';
import { FlowChartWithState } from '@mrblenny/react-flow-chart';
import * as actions from '@mrblenny/react-flow-chart';

import Sidebar from './Sidebar';
import Content from './Holst';
import NodeInnerCustom from './NodeInnerCustom';
import { chartSimple, activeNode, nodes } from '../constants';

class Tkit extends React.Component {
  constructor() {
    super();
    this.state = chartSimple;
    this.activeNode = activeNode;
  }

  render() {
    const stateActions = mapValues(actions, any => (...args) =>
      this.setState(...args),
    );

    return (
      <div className="Page">
        <Content>
          <FlowChartWithState
            initialValue={this.state}
            config={{
              snapToGrid: true,
            }}
            Components={{
              NodeInner: NodeInnerCustom, //ADD PORT CUSTOM
            }}
            callbacks={stateActions}
          />
        </Content>
        <Sidebar data={nodes} activeNode={this.activeNode} />
      </div>
    );
  }
}

const App = () => {
  return <Tkit />;
};

export default App;
