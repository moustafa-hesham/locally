import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UnopDropdown from 'unop-react-dropdown';

export default function SearchCountResult({ title }) {
  function handler() {}

  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1 d-flex align-items-center">
              <FontAwesomeIcon icon={faArrowDownShortWide} className="ms-1" />
              Sort by
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div className="border-bottom card-filter-item">Best Selling</div>
            <div className="border-bottom card-filter-item">Top Rated</div>
            <div className="border-bottom card-filter-item">Price: Low to High</div>
            <div className="card-filter-item">Price: High to Low</div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
}
