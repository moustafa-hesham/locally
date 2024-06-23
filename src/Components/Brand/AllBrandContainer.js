import React from 'react';
import BrandCard from './BrandCard';
import brandlogo from '../../images/brand1.png';
import { Container, Row } from 'react-bootstrap';
export default function AllBrandContainer() {
  return (
    <Container>
      <div className="admin-content-text pt-3">All Brands</div>
      <Row className="d-flex justify-content-between my-2">
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
      </Row>
    </Container>
  );
}
