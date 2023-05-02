import React from "react";
import "./Shop.scss";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../../components/ProductItem/Product";
import 'boxicons/css/boxicons.min.css'
import "./Shop.scss";
const Shop = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="my-5 shop-page" md="3">
            <div className="sidebar">
              <div className="sidebar-wrapper">
                <div className="search">
                  <h3>Search Product</h3>
                  <div className="search-item">
                    <input type="text" placeholder="search product"/>
                    <button><i class='bx bx-search'></i></button>
                  </div>
                </div>
                <div className="category">
                  <h5>Category</h5>
                  <hr />
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                  <label htmlFor="men">
                    <input type="checkbox" />
                    Men
                  </label>
                </div>
                <hr />
                <div className="tag">
                  <h5>Tag</h5>
                  <hr />
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  <label htmlFor="saree">
                    <input type="checkbox" />
                    Saree
                  </label>
                  
                </div>

                <div className="brand">
                  <h5>Brand</h5>
                  <hr />
                  <div className="brand-btn">
                  <button>Samsung</button>
                  <button>Samsung</button>
                  <button>Samsung</button>
                  <button>Samsung</button>
                  <button>Samsung</button>
                  <button>Samsung</button>
                  </div>
                  
                </div>
                <div className="price-ranger">
                  <h5>search product by price</h5>
                  <hr />
                  <label htmlFor="">
                    <input type="text" min='0' placeholder="min"/> 
                    <input type="text" max='10' placeholder="max"/>
                    <button><i class='bx bx-search'></i></button>
                  </label>
                </div>
              </div>
            </div>
          </Col>
          <Col className="shop-page-wrapper" md="9">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shop;
