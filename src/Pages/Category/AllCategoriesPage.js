import React from 'react';
import CategoryItemsContainer from '../../Components/Category/CategoryItemsContainer';
import Pagination from '../../Components/Utilities/Pagination';

export default function AllCategoriesPage() {
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryItemsContainer />
      <Pagination />
    </div>
  );
}
