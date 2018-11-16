import React from "react";
import GridItem from "../components/GridItem";
import { Grid, AutoSizer } from "react-virtualized";

class Grids extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      list: Array(90 * 90)
        .fill()
        .map((g, i) => {
          return {
            id: i
          };
        })
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.cellRenderer = this.cellRenderer.bind(this);
  }
  cellRenderer({ columnIndex, rowIndex, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <GridItem id={key} />
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }
  render() {
    return (
      <AutoSizer>
        {({ width }) => (
          <Grid
            cellRenderer={this.cellRenderer}
            columnCount={100}
            columnWidth={100}
            height={this.state.height}
            rowCount={this.state.list.length}
            rowHeight={100}
            width={width}
          />
        )}
      </AutoSizer>
    );
  }
}

export default Grids;
