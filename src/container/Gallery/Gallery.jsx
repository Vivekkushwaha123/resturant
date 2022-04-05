import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRight } from 'react-icons/bs'
import { SubHeading, } from '../../components';
import { images, data } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='app__gallery flex_center' >
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>
          Photo Gallery
        </h1>
      </div>

    </div>
  );
}
export default Gallery;
