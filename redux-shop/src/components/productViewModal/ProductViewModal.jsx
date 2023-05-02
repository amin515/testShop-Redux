import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./ProductViewModal.scss";
const ProductViewModal = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} centered size="lg" >
        <Modal.Body>
          <div className="product-quick-view">
            <Container>
                <Row>
                    <Col md='5'><div className="quick-view-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71RZxhZXb2L.jpg"
                alt=""
              />
            </div></Col>
                    <Col md='7'>
                    <div className="product-detailes">
              <div className="quick-view-product-name">
                <h3>Indian Saree</h3>
              </div>

              <hr />
              <div className="quick-pricing">
                <span className="regular">$350</span>
                <span className="sale">$250</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, architecto nesciunt consequuntur pariatur modi
                laudantium cupiditate assumenda adipisci recusandae eos ipsam
                aliquam beatae officiis ullam ducimus quis enim sit praesentium.
              </p>
              <hr />
              <div className="quick-view">
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
                    </Col>
                </Row>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductViewModal;
