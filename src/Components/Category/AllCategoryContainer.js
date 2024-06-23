import React from 'react';
import CategoryItem from './CategoryItem';
import { Container, Row } from 'react-bootstrap';
import prod from '../../images/slider4.png';

export default function AllCategoryContainer() {
  return (
    <Container>
      <div className="admin-content-text pt-3">All Categories</div>
      <Row className="d-flex justify-content-between my-2">
        <CategoryItem title={'Mobiles'} background={'#FFFF00'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#00FF00'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#0000FF'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
      </Row>
    </Container>
  );
}
