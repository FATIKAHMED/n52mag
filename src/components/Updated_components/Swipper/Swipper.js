import React from 'react';
import Slider from 'react-slick';

import tags1 from './SwipperAssets/tag1.png';
import tags2 from './SwipperAssets/tag2.png';
import tags3 from './SwipperAssets/tag3.png';
import './Swipper.css';

const tags=[tags1,tags2,tags3]
function Swipper() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${tags[i]}`} alt="text" />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb ',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <h2> Single Item</h2>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        <div >
          <img className='swipes' src={tags1} alt="text" />
        </div>
        <div >
          <img className='swipes' src={tags2} alt="text" />
        </div>
        <div >
          <img className='swipes' src={tags3} alt="text" />
        </div>
      </Slider>
    </>
  );
}

export default Swipper;
