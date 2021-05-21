import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromLiked } from "../actions/likeActions";
import { IoMdHeart } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import Zoom from "react-reveal/Zoom";
import Button from "react-bootstrap/Button";
import Modall from "./Modal";
class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: false,
      item2: false,
    };
  }
  openModal = () => {
    this.setState({ item1: true });
  };
  closeModal = () => {
    this.setState({ item1: false });
  };
  render() {
    const { likedItems } = this.props;
    const { item1 } = this.state;
    return (
      <div>
        {likedItems.length !== 0 && (
          <div>
            <IoMdHeart className="iconHome" onClick={() => this.openModal()} />
          </div>
        )}

        <div className="cart">
          {item1 && (
            <Modal show={true}>
              <Zoom>
                <Modal.Header>
                  <Modal.Title className="likeHeader">Liked Items</Modal.Title>
                </Modal.Header>
                <ul className="liked-items">
                  <Modal.Body>
                    <ul className="drinksLiked">
                      {likedItems.map((item) => (
                        <li key={item._id}>
                          <div className="drinksLike">
                            <img
                              className="likeImg"
                              src={item.img}
                              alt={item.title}
                              onClick={() => {
                                this.setState({ item2: item });
                              }}
                            ></img>
                          </div>
                          <div className="likeNB">
                            <div className="likeNameModal">{item.name}</div>
                            <div className="right">
                              <Button
                                variant="primary"
                                className="button"
                                onClick={() => this.props.removeFromLiked(item)}
                              >
                                <p className="p">Remove</p>
                              </Button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Modal.Body>
                  {this.state.item2 && (
                    <Modall
                      item={this.state.item2}
                      likedItems={likedItems}
                      closeModal={() => {
                        this.setState({ item2: false });
                      }}
                    />
                  )}
                  <Modal.Footer>
                    <div>
                      <Button
                        variant="secondary"
                        onClick={() => this.closeModal(item1)}
                        className="closeBtn"
                      >
                        Close
                      </Button>
                    </div>
                  </Modal.Footer>
                </ul>
              </Zoom>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    likedItems: state.like.likedItems,
  }),
  { removeFromLiked }
)(Like);
