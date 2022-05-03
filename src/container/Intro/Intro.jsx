import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef(false);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <section className='app__video' id='intro'>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        muted
        controls={false}
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
          {playVideo
            ? <BsPauseFill color='#fff' fontSize='20px' />
            : <BsFillPlayFill color='#fff' fontSize='20px' />
          }
        </div>
      </div>
    </section>
    )
    }

export default Intro;
