import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from '../../Components/Cart/CartItem';
import CartCheckout from './CartCheckout';

export default function CartPage() {
  return (
    <div>
      <Container style={{ minHeight: '667px' }}>
        <Row>
          <div className="cart-title mt-4">Shopping Cart</div>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs="12" md="9">
            <CartItem />
            <CartItem />
          </Col>
          <Col xs="6" md="3">
            <CartCheckout />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
