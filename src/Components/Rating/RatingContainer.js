import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RateItem from './RateItem';
import RatePost from './RatePost';
import Pagination from '../Utilities/Pagination';

export default function RatingContainer() {
  return (
    <Container className="rate-container">
      <Row>
        <Col>
          <div className="sub-title d-inline p-1">Ratings</div>
          <FontAwesomeIcon icon={faStar} className="mt-2 rate-icon" />
          <div className="cat-rate d-inline p-1 pt-2">4.3</div>
          <div className="rate-count d-inline p-1 pt-2">(160 reviews)</div>
        </Col>
      </Row>
      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <Pagination />
    </Container>
  );
}
