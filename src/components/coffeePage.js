import React, { Component } from "react";
import Nav from "./Nav";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default class CoffeePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    };
  }
  openModal = (item) => {
    this.setState({ item });
  };
  closeModal = () => {
    this.setState({ item: null });
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <Nav />
        <div className="drinks">
          <Fade left cascade>
            <ul className="drinks">
              {this.props.coffees.map((item) => (
                <li key={item.id} className="drinksLi">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="drinksImg"
                    onClick={() => this.openModal(item)}
                  />
                  <p className="nameP">{item.name}</p>
                </li>
              ))}
            </ul>
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
                      <li>Type: {item.type}</li>
                      <li>Caffeine: {item.caffeine}</li>
                      <li>Calories: {item.calories}</li>
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
                </Modal.Footer>
              </Zoom>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}
