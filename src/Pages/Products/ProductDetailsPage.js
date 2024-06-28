import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import { Container } from 'react-bootstrap';
import ProductDetails from '../../Components/Products/ProductDetails';
import RatingContainer from '../../Components/Rating/RatingContainer';
import CardProductContainer from '../../Components/Products/CardProductContainer';

export default function ProductDetailsPage() {
  return (
    <div style={{ minHeight: '676px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RatingContainer />
        <CardProductContainer title={'Products you may like'} />
      </Container>
    </div>
  );
}
