import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function ChoosePayment() {
  return (
    <div>
      <div className="admin-content-text pt-5">Choose Payment Method</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between">
          <Col xs="12" className="my-4">
            <input
              name="paymentMethod"
              id="creditCardPayment"
              type="radio"
              value="Credit Card Payment"
              className="mt-2"
            />
            <label className="mx-2" htmlFor="creditCardPayment">
              Credit Card Payment
            </label>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="12" className="d-flex">
            <input
              name="paymentMethod"
              id="cashOnDelivery"
              type="radio"
              value="Cash on Delivery"
            />
            <label className="mx-2" htmlFor="cashOnDelivery">
              Cash on Delivery
            </label>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline border">34,000 EGP</div>
          <div className="product-cart-add px-3 pt-2 d-inline ms-2">
            Proceed to Checkout
          </div>
        </Col>
      </Row>
    </div>
  );
}
