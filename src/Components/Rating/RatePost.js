import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

export default function RatePost() {
  const [rating, setRating] = useState(3.5);
  // Function to handle rating change
  const handleRatingChange = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };

  const customStyles = {
    itemShapes: Star,
    activeFillColor: '#ffd700', // Active star color
    inactiveFillColor: '#d3d3d3', // Inactive star color
    fraction: 2, // Enable half-star ratings
  };

  return (
    <div>
      <Row className="mt-3">
        <Col sm="12" className="me-5 d-flex">
          <div className="rate-name d-inline ms-3 me-1 mt-1">Moustafa Hesham</div>
          <Rating
            value={rating}
            onChange={handleRatingChange} // Pass the handler function
            itemStyles={customStyles} // Pass custom styles
            style={{ width: '13%' }} // Adjust the overall width
          />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2">
          <textarea
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="Write your comment"
          />
          <div className="d-flex justify-content-end">
            <div className="product-cart-add px-3 py-2 text-center d-inline">
              Add Comment
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
