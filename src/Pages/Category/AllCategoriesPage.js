import React from 'react';
import AllCategoryContainer from '../../Components/Category/AllCategoryContainer';
import Pagination from '../../Components/Utilities/Pagination';

export default function AllCategoriesPage() {
  return (
    <div style={{ minHeight: '670px' }}>
      <AllCategoryContainer />
      <Pagination />
    </div>
  );
}
