import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdHeart } from "react-icons/io";
import Zoom from "react-reveal/Zoom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default class Modall extends Component {
  render() {
    return (
      <div>
        {this.props.item && (
          <Modal show={true}>
            <Zoom>
              <Modal.Header>
                <Modal.Title>
                  <p className="modalName">{this.props.item.name}</p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Row>
                    <Col xs={6} md={4}>
                      <div>
                        <img
                          src={this.props.item.img}
                          alt={this.props.item.img}
                          className="modalImg"
                        ></img>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <ul className="modalStats">
                          <li>Size: {this.props.item.size}</li>
                          <li>Caffeine: {this.props.item.caffeine}mg</li>
                          <li>Calories: {this.props.item.calories}kcal</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                  <div className="modalInfo">{this.props.item.info}</div>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="closeBtn"
                  variant="secondary"
                  onClick={() => this.props.closeModal(this.props.item)}
                >
                  Close
                </Button>
                {!this.props.likedItems && (
                  <Button
                    className="closeBtn"
                    variant="primary"
                    onClick={() => {
                      this.props.addToLiked(this.props.item);
                      this.props.closeModal(this.props.item);
                    }}
                  >
                    <IoMdHeart />
                  </Button>
                )}
              </Modal.Footer>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
