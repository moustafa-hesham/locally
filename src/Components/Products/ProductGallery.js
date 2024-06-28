import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import mobile1 from '../../images/mobile.png';
import mobile2 from '../../images/mobile1.png';
import mobile3 from '../../images/mobile2.png';

import LeftButton from './LeftButton';
import RightButton from './RightButton';
export default function ProductGallery() {
  const images = [
    {
      original: `${mobile1}`,
      //   thumbnail: `${laptop}`,
    },
    {
      original: `${mobile1}`,
      //   thumbnail: `${laptop}`,
    },
    {
      original: `${mobile1}`,
      //   thumbnail: `${laptop}`,
    },
  ];
  return (
    <ImageGallery
      items={images}
      defaultImage={mobile1}
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={false}
      isRTL={false}
      renderRightNav={RightButton}
      renderLeftNav={LeftButton}
      className="product-gallery-card d-flex justfiy-content-center align-items-center
    pt-2"
    />
  );
}
