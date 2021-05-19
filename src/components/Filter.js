import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterDrinks,
  sortDrinks,
  searchDrinks,
} from "../actions/drinksActions";

class Filter extends Component {
  render() {
    return !this.props.filteredDrinks ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
        <div className="filter-sort">
          Order by caffeine level{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortDrinks(this.props.filteredDrinks, e.target.value)
            }
          >
            <option value="">ALL</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Intensity{" "}
          <select
            value={this.props.intensity}
            onChange={(e) =>
              this.props.filterDrinks(this.props.drinks, e.target.value)
            }
          >
            <option value="">ALL</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Drinks"
            value={this.props.name}
            onChange={(e) =>
              this.props.searchDrinks(this.props.drinks, e.target.value)
            }
          />
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    intensity: state.drinks.intensity,
    sort: state.drinks.sort,
    drinks: state.drinks.items,
    filteredDrinks: state.drinks.filteredItems,
  }),
  {
    filterDrinks,
    sortDrinks,
    searchDrinks,
  }
)(Filter);
