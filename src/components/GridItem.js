import React from "react";

const ACTIVE_CLASSNAME = "active";

class GridItem extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <div className="grid-item">{this.props.id}</div>;
  }
}

export default GridItem;
