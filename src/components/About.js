import '../styles/About.scss';
import React, { useRef, useState } from 'react';

const ABOUT_TEXT =
  'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.';

const About = () => {
  const videoDOM = useRef(null);
  const [status, setStatus] = useState(false);
  const [initial, setInitial] = useState(false);

  const onVideoClick = () => {
    if (status) {
      videoDOM.current.pause();
    } else {
      videoDOM.current.play();
    }
    setInitial(true);
    setStatus(!status);
  };

  return (
    <div className="about" id="about">
      <div className="about__title">
        <img className="text" src="/static/images/about-title.svg" alt="text" />
        <img
          className="underline"
          src="/static/images/about-title-underline.svg"
          alt="line"
        />
      </div>
      <div className="about__video" onClick={onVideoClick}>
        <div className="video-container">
          {!status ? (
            <div className="play-button" onClick={onVideoClick} />
          ) : null}
          {!initial ? (
            <img
              className="video-thumbnail"
              src="static/images/about-thumbnail.svg"
              alt="thumbnail"
            />
          ) : null}
          <video
            ref={videoDOM}
            src="/static/videos/about-video.mp4"
            id="about__video"
            className="video"
          />
        </div>
      </div>

      <div className="about__text">{ABOUT_TEXT}</div>
      <div className="about__more">
        <div className="more-button">
          <div className="text">VIEW MORE</div>
          <div className='line'/>
        </div>
      </div>
    </div>
  );
};

export default About;
