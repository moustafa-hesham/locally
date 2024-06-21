import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <Container style={{ minHeight: 'calc(100vh - 764px)' }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">Register</label>
          <input
            placeholder="Enter your name"
            type="text"
            className="user-input my-2 px-3 mx-auto"
          />
          <input
            placeholder="Enter your email"
            type="text"
            className="user-input my-2 px-3 mx-auto"
          />
          <input
            placeholder="Enter your password"
            type="password"
            className="user-input px-3 my-2 mx-auto"
          />
          <button className="btn-login mx-auto mt-4">Register</button>
          <label className="mx-auto my-4">
            Already have an account?
            <Link to={'/login'}>
              <span style={{ cursor: 'pointer', color: 'red' }} className="px-2">
                Login
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
}
