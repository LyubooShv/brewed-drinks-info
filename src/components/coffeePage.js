import React, { Component } from "react";
import Nav from "./Nav";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { fetchDrinks } from "../actions/drinksActions";
import { addToLiked } from "../actions/likeActions";
import Modall from "./Modal";
class CoffeePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    };
  }
  componentDidMount() {
    this.props.fetchDrinks();
  }
  openModal = (item) => {
    this.setState({ item });
  };
  closeModal = () => {
    this.setState({ item: null });
  };
  render() {
    return (
      <div className="cP">
        <Nav />
        <div className="drinkss">
          <Fade left cascade>
            {!this.props.drinks ? (
              <div>Loading...</div>
            ) : (
              <ul className="drinks">
                {this.props.drinks.map(
                  (item) =>
                    item.drink === "coffee" && (
                      <li key={item._id} className={this.props.drinks.length >6 ? "drinksLi" : "drinksLii"}>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="drinksImg"
                          onClick={() => this.openModal(item)}
                        />
                        <p className="nameP">{item.name}</p>
                      </li>
                    )
                )}
              </ul>
            )}
          </Fade>
          <Modall
            item={this.state.item}
            closeModal={this.closeModal}
            addToLiked={this.props.addToLiked}
          />
        </div>
      </div>
    );
  }
}
export default connect((state) => ({ drinks: state.drinks.filteredItems }), {
  fetchDrinks,
  addToLiked,
})(CoffeePage);
