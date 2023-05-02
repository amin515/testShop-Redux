import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './SingleProduct.scss'
import Product from '../../components/ProductItem/Product';
const SingleProduct = () => {
  return (
    <>
      <Container>
        <Row className='my-5'>
            <Col md='6'>
                <div className="single-page-img">
                    <div className="page-wrapper">
                      <Card>
                        <Card.Img src="https://images-na.ssl-images-amazon.com/images/I/71RZxhZXb2L.jpg"></Card.Img>
                      </Card>
                        
                    </div>
                </div>
            </Col>
            <Col md='6'>
                <div className="single-page-detailes">
                    <div className="page-detailes-wrapper">
                        <div className="single-page-title">
                          <h3> Indian Saree</h3>
                        </div>
                        <div className="single-page-price">
                            <span className="reg">$300</span>
                            <span className="sale">$250</span>
                        </div>
                        <div className="desc">
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, optio aperiam corrupti laboriosam praesentium odit doloremque repellendus quae dolor. Provident quaerat totam dolores eum culpa porro delectus corporis impedit sapiente.</p>
                        </div>
                        <div className="stock">
                          <p>Stock <span>20</span></p>
                        </div>
                        <div className="cart-btn">
                          <label htmlFor="">
                            <input type="number" />
                          </label>
                          <button>add to cart</button>
                          <button className='wish-btn'><i class='bx bx-heart'></i></button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <hr />
        <Row>
          <Col md='12'>
            <h2>Related product</h2>
            <div className="related-product">
              
            <Product />
            <Product />
            <Product />
            <Product />
            </div>
            
          </Col>
        </Row>
      </Container>  
    </>
  )
}

export default SingleProduct;