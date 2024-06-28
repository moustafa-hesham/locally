import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utilities/SubTitle';
import ProductCard from './ProductCard';

export default function CardProductContainer({ title, btntitle, path }) {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} path={path}></SubTitle>
      <Row className="d-flex justify-content-between my-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
}
