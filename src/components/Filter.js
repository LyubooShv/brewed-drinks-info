import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Drinks</div>
        <div className="filter-sort">
          Order by caffeine level{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        {/* <div className="filter-size">
          Intensity{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div> */}
      </div>
    );
  }
}