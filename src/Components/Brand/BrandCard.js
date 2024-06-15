import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function BrandCard({ img }) {
  return (
    <Col>
      <Card style={{ width: '18rem' }} xs="6" sm="6" md="4" lg="2">
        <Card.Img variant="top" src={img} />
      </Card>
    </Col>
  );
}
