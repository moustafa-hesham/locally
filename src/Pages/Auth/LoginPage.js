import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Container style={{ minHeight: 'calc(100vh - 764px)' }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">Login</label>
          <input
            placeholder="Enter your email"
            type="text"
            className="user-input my-3 px-3 mx-auto"
          />
          <input
            placeholder="Enter your password"
            type="password"
            className="user-input px-3 mx-auto"
          />
          <button className="btn-login mx-auto mt-4">Login</button>
          <label className="mx-auto my-4">
            Don't have an account?
            <Link to={'/register'}>
              <span style={{ cursor: 'pointer', color: 'red' }} className="px-2">
                Click here
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
}
