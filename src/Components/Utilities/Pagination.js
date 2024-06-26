import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination() {
  function handlePageClick() {}
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2} // appears the number of pages at the start
      marginPagesDisplayed={2} //The number of pages to display for margins.
      pageCount={10}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={'pagination justify-content-center p-3'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      nextClassName={'page-item'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      previousLinkClassName={'page-link'}
      nextLinkClassName={'page-link'}
      activeClassName={'active'}
    />
  );
}
