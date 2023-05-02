import React, { useState } from "react";
import "./product.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductViewModal from "../productViewModal/ProductViewModal";
import { Link } from 'react-router-dom'
const Product = () => {

  const [show, setShow] = useState(false)
  return (
    <Container className="product-item my-5">
      <ProductViewModal show={show} onHide={() => setShow(false)}/>
      <Row>
        <Col>
          <Card>
            <Link to='/single-product'>
            <Card.Img src="https://images-na.ssl-images-amazon.com/images/I/71RZxhZXb2L.jpg"></Card.Img>
            </Link>
            <Card.Body>
              <Card.Title>Indian Saree</Card.Title>
              <div className="pricing">
                <span className="regular">$350</span>
                <span className="sale">$250</span>
              </div>
              <div className="product-btn">
                <button className="btn btn-primary">Add to cart</button> &nbsp;
                <button className="btn btn-info" onClick={() => setShow(!show)}>View</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
