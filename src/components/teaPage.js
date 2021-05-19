import React, { Component } from "react";
import Nav from "./Nav";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { fetchDrinks } from "../actions/drinksActions";
import { addToLiked } from "../actions/likeActions";
class TeaPage extends Component {
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
  closeModal = (item) => {
    this.setState({ item: null });
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <Nav />
        <div className="drinks">
          <Fade right cascade>
            {!this.props.drinks ? (
              <div>Loading...</div>
            ) : (
              <ul className="drinks">
                {this.props.drinks.map(
                  (item) =>
                    item.drink === "tea" && (
                      <li key={item._id} className="drinksLi">
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
          {item && (
            <Modal show={true} onRequestClose={this.closeModal}>
              <Zoom>
                <Modal.Header>
                  <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <img
                      src={item.img}
                      alt={item.img}
                      className="drinksImg"
                    ></img>
                  </div>
                  <div>{item.info}</div>
                  <div>
                    <ul>
                      <li>Size: {item.size}</li>
                      <li>Caffeine: {item.caffeine}mg</li>
                      <li>Calories: {item.calories}kcal</li>
                    </ul>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => this.closeModal(item)}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.props.addToLiked(item);
                      this.closeModal(item);
                    }}
                  >
                    Like
                  </Button>
                </Modal.Footer>
              </Zoom>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}
export default connect((state) => ({ drinks: state.drinks.filteredItems }), {
  fetchDrinks,
  addToLiked,
})(TeaPage);
