import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromLiked } from "../actions/likeActions";
import { IoMdHeart } from "react-icons/io";
import Modal from "react-bootstrap/Modal"
import Zoom from "react-reveal/Zoom";

class Like extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: false,
    };
  }
  openModal = () => {
    this.setState({ item :true});
  };
  closeModal = () => {
    this.setState({ item:false });
  };  render() {
    const { likedItems } = this.props;
    const { item } = this.state;
    return (
      <div>
        {likedItems.length !== 0  && <div><IoMdHeart  onClick={() => this.openModal()}/></div>}
        
        <div className="cart">
          { item && (
            <Modal show={true} onRequestClose={this.closeModal}>
          <Zoom>
          <Modal.Header>
                  <Modal.Title>Liked Items</Modal.Title>
                </Modal.Header>
            <ul className="cart-items">
            <Modal.Body>
              {likedItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.imgs} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.name}</div>
                    <div className="right">
                      <button
                        className="button"
                        onClick={() => this.props.removeFromLiked(item)}
                      >
                        Remove
                      </button>
                      
                    </div>
                    
                    
                
                  </div>
                </li>
              ))}</Modal.Body>
              <Modal.Footer>
              <div><button
                    variant="secondary"
                    onClick={() => this.closeModal(item)}
                  >
                    Close
                  </button></div>
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
