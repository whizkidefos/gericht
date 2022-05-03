import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';

import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <h4 className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</h4>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <section className='app__bg app__wrapper section__padding' id='awards'>

    <article className="app__wrapper_info">
      <SubHeading title='Awards & recognition' />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>

    </article>

    <figure className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </figure>

  </section>
);

export default Laurels;
