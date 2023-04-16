import React from 'react'
import './Header.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
        <Container>
          <Row>
            <Col md={3}>
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
  )
}

export default Header;