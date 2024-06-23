import React from 'react';
import SubTitle from '../Utilities/SubTitle';
import { Container, Row } from 'react-bootstrap';
import CategoryItem from '../Category/CategoryItem';
import prod from '../../images/slider4.png';

export default function HomeCategory() {
  return (
    <Container>
      <SubTitle title={'Categories'} btntitle={'More'} path={'/allcategories'}></SubTitle>
      <Row className="d-flex justify-content-between my-2">
        <CategoryItem title={'Mobiles'} background={'#FFFF00'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#00FF00'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#0000FF'} img={prod} />
        <CategoryItem title={'Mobiles'} background={'#800080'} img={prod} />
      </Row>
    </Container>
  );
}
