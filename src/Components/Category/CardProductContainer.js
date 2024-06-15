import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utilities/SubTitle';
import ProductCard from '../Products/ProductCard';

export default function CardProductContainer() {
  return (
    <Container>
      <SubTitle title={'Most Selling'} btntitle={'More'}></SubTitle>
      <Row className="d-flex justify-content-between my-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
}
