import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import { Container } from 'react-bootstrap';
import ProductDetails from '../../Components/Products/ProductDetails';

export default function ProductDetailsPage() {
  return (
    <div style={{ minHeight: '676px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
      </Container>
    </div>
  );
}
