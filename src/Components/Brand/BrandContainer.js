import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utilities/SubTitle';
import BrandCard from './BrandCard';
import brandlogo from '../../images/brand1.png';

export default function BrandContainer({ title, btntitle }) {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} path={'/allbrands'}></SubTitle>
      <Row className="d-flex justify-content-between my-2">
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
        <BrandCard img={brandlogo} />
      </Row>
    </Container>
  );
}
