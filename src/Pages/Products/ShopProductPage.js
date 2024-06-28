import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import SearchCountResult from '../../Components/Utilities/SearchCountResult';
import { Col, Container, Row } from 'react-bootstrap';
import SideFilter from '../../Components/Utilities/SideFilter';
import CardProductContainer from '../../Components/Products/CardProductContainer';
import Pagination from '../../Components/Utilities/Pagination';

export default function ShopProductPage() {
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title={'200 Products'} />
        <Row className="d-flex flex-row">
          <Col xs="2" className="d-flex">
            <SideFilter />
          </Col>
          <Col xs="10">
            <CardProductContainer title="" btntitle="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
}
