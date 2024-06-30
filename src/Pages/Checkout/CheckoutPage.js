import React from 'react';
import { Container } from 'react-bootstrap';
import ChoosePayment from '../../Components/Checkout/ChoosePayment';

export default function CheckoutPage() {
  return (
    <Container style={{ minHeight: '670px' }}>
      <ChoosePayment />
    </Container>
  );
}
