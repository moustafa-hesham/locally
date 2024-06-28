import React from 'react';
import { Card, Col } from 'react-bootstrap';
import prod1 from '../../images/prod3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export default function ProductCard() {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: '100%',
          height: '345px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 2px 0 rgba(151,151,151,0.5)',
        }}
      >
        <Link to={'/products:/id'}>
          <Card.Img style={{ height: '228px', width: '100%' }} src={prod1} />
        </Link>
        <Card.Body>
          <Card.Title className="d-flex">
            <div className="card-title">Amazfit S Smartwatch Carbon Black</div>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-center px-2"
              style={{
                height: '24px',
                width: '26px',
              }}
            />
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-center"
                    style={{
                      height: '24px',
                      width: '26px',
                    }}
                  />
                  <div className="card-rate mx-2">4.5</div>
                </div>
              </div>
              <div className="d-flex">
                <div className="card-price">880</div>
                <div className="card-currency mx-1">EGP</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
