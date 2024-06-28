import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function RateItem() {
  return (
    <div>
      <Row className="mt-3">
        <Col className="d-flex me-5">
          <p className="rate-name d-inline ms-2">Moustafa Hesham</p>
          <FontAwesomeIcon icon={faStar} className="rate-icon px-1" />
          <div className="cat-rate d-inline  ">4.3</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2">
          <p className="rate-description d-inline ms-2">
            This product is perfect, and good price.
          </p>
        </Col>
      </Row>
    </div>
  );
}
