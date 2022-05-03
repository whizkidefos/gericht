import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <section className='app__header app__wrapper section__padding' id='home'>
    <article className="app__wrapper_info">
      <SubHeading title='Chase the new flavour' />
      <h1 className="app__header-h1">The key to fine dinning.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint similique, asperiores numquam nihil saepe facere deserunt labore quod deleniti sapiente cum harum earum voluptatem ipsam magni porro assumenda doloremque molestias.
      </p>
      <button type='button' className="custom__button">Explore Menu</button>
    </article>
    <figure className="app__wrapper_img">
      <img src={images.welcome} alt="welcome banner" />
    </figure>
  </section>
);

export default Header;
