import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="chef's world's" />
      <h1 className='headtext__cormorant'> What we Belive in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
        <img src={images.quote} alt="quotes" />
        <p className='p__opensans'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A expedita nam ullam voluptatem voluptatibus! Obcaecati quis a eaque. Accusantium quod sunt optio quas iste officiis. Vitae, vel quas. Tempore illo obcaecati corrupti.
        </p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
