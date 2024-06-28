import React from 'react';
import Slider from '../../Components/Home/Slider';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductContainer from '../../Components/Products/CardProductContainer';
import DiscountSection from './DiscountSection';
import BrandContainer from '../../Components/Brand/BrandContainer';

export default function HomePage() {
  return (
    <div className="font" style={{ minHeight: '670px' }}>
      <Slider />
      <HomeCategory />
      <CardProductContainer title={'Most Selling'} btntitle={'More'} path={'/products'} />
      <DiscountSection />
      <CardProductContainer title={'Top Rating'} btntitle={'More'} path={'/products'} />
      <BrandContainer title={'Top Brands'} btntitle={'more'} />
    </div>
  );
}
