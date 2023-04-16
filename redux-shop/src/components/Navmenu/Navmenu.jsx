
import React from 'react'
import './Navmenu.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Navmenu = () => {
  return (
    <nav className="menu">
    <Container>
      <Row>
        <Col>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="wishlist">Wish List</NavLink>
            </li>
            <li>
              <NavLink to="admin">Admin</NavLink>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </nav>
  )
}

export default Navmenu;