import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function ProductDescription() {
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">Electronics:</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            iPhone XR with 128GB memory and supports 4G LTE with FaceTime app (Product)
            Red
            <div className="cat-rate d-block mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand:</div>
          <div className="brand-text d-inline mx-1">Samsung</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div className="color ms-2 border" style={{ backgroundColor: '#E52C2C' }}></div>
          <div className="color ms-2 border " style={{ backgroundColor: 'white' }}></div>
          <div className="color ms-2 border" style={{ backgroundColor: 'black' }}></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">Specifications:</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            Features dual SIM with physical SIM card and e-SIM, allowing you to unlock
            your iPhone and log into apps and accounts easily. Face ID is the fastest and
            most secure facial authentication. Features the A12 Bionic chip, which is the
            smartest and most powerful chip in smartphones. The world's most popular
            camera ushers in a new era of photography with innovative ISP and neural
            engine sensors, enabling unprecedented photos. The single-lens camera focuses
            sharply on subjects in the foreground while blurring the background. Overview
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">34,000 EGP</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">Add to Cart</div>
        </Col>
      </Row>
    </div>
  );
}
