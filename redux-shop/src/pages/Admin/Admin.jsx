import React from "react";
import "./Admin.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin-page">
      <Container>
        <Row className="my-3">
          <Col md="3">
            <div className="admin-menu">
              <ul>
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="products">Products</Link>
                </li>
                <li>
                  <Link to="category">Category</Link>
                </li>
                <li>
                  <Link to="tag">Tags</Link>
                </li>
                <li>
                  <Link to="brand">Brands</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="9">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
