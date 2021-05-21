import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterDrinks,
  sortDrinks,
  searchDrinks,
} from "../actions/drinksActions";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { valueSort: "" };
    this.state = { valueFilter: "" };
  }
  render() {
    return !this.props.filteredDrinks ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
        <div className="filter-input">
          <input
            className="input"
            type="text"
            placeholder="Search Drinks"
            value={this.props.name}
            onChange={(e) =>
              this.props.searchDrinks(this.props.drinks, e.target.value)
            }
          />
        </div>

        <div className="filter-sort">
          {[DropdownButton].map((DropdownType, idx) => (
            <DropdownType
              bsPrefix="drDown"
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="sm"
              variant="secondary"
              title={this.state.valueSort || "ALL"}
              onSelect={(e) => {
                this.props.sortDrinks(this.props.filteredDrinks, e);
                this.setState({ valueSort: e });
              }}
            >
              <Dropdown.Header className="drHeader">
                Order By Caffeine
              </Dropdown.Header>
              <Dropdown.Item bsPrefix="drI" eventKey="ALL">
                ALL
              </Dropdown.Item>
              <Dropdown.Item bsPrefix="drI" eventKey="Lowest">
                Lowest
              </Dropdown.Item>
              <Dropdown.Item bsPrefix="drI" eventKey="Highest">
                Highest
              </Dropdown.Item>
            </DropdownType>
          ))}
          <p className="filter-name">caffeine</p>
        </div>
        <div className="filter-intensity">
          {[DropdownButton].map((DropdownType, idx) => (
            <DropdownType
              bsPrefix="drDown"
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="sm"
              variant="secondary"
              title={this.state.valueFilter || "ALL"}
              onSelect={(e) => {
                this.props.filterDrinks(this.props.drinks, e);
                this.setState({ valueFilter: e });
              }}
            >
              <Dropdown.Header className="drHeader">
                Filter By Intensity
              </Dropdown.Header>
              <Dropdown.Item bsPrefix="drI" eventKey="ALL">
                ALL
              </Dropdown.Item>
              <Dropdown.Item bsPrefix="drI" eventKey="Low">
                Low
              </Dropdown.Item>
              <Dropdown.Item bsPrefix="drI" eventKey="Medium">
                Medium
              </Dropdown.Item>
              <Dropdown.Item bsPrefix="drI" eventKey="High">
                High
              </Dropdown.Item>
            </DropdownType>
          ))}
          <p className="filter-name"> Intensity</p>
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
