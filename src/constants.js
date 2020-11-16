import nodes from './nodes'

const chartSimple = {
  offset: {
    x: 0,
    y: 0
  },
  nodes: {
  },
  links: {
  },
  selected: {},
  hovered: {}
}
const activeNode = {
  isSelected: false,
  sidebar: null,
  node: null,
}
export { chartSimple, activeNode, nodes as nodes}
