import React, { Component } from 'react'
import { REACT_FLOW_CHART } from "@mrblenny/react-flow-chart"

class SidebarItem extends Component {
    render() {
        const {
            type,
            ports,
            properties,
            handleNodeClick,
        } = this.props;
        return (
            <div draggable='true' className="SidebarItem" onDragStart={(event) => {
                event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties, handleNodeClick }))
            }}
            >{properties.title}</div>
        )
    }
}

export default SidebarItem
