// LeftButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LeftButton = (onClick, disabled) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous Slide"
      style={{
        float: 'left',
        marginTop: '220px',
        cursor: disabled ? 'default' : 'pointer',
        background: 'none',
        border: 'none',
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} size="2x" />
    </button>
  );
};

export default LeftButton;
