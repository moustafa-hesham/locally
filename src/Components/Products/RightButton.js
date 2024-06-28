// LeftButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RightButton = (onClick, disabled) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous Slide"
      style={{
        float: 'right',
        marginTop: '220px',
        cursor: disabled ? 'default' : 'pointer',
        background: 'none',
        border: 'none',
      }}
    >
      <FontAwesomeIcon icon={faArrowRight} size="2x" />
    </button>
  );
};

export default RightButton;
