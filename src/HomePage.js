import './styles/HomePage.scss';
import LandingSection from './components/LandingSection';
import About from './components/About';
import BrandExperience from './components/BrandExperience';
import Awards from './components/Awards';
import Ingradients from './components/Ingradients';
import Founder from './components/Founder';
import CarouselSection from './components/CarouselSection';
import { useState, useEffect, useRef } from 'react';
import SideMenu from './components/SideMenu';

function HomePage() {
  const [visible, setVisible] = useState(false);
  const [isMenuShow, setMenuShow] = useState(false);
  const [position, setPosition] = useState('');
  const navDOM = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return window.removeEventListener('', toggleVisible);
  });

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(true);
    } else if (scrolled <= 50) {
      setVisible(false);
    }

    return visible;
  };

  const onSideMenuDisplay = (isMenuShow) => {
    setMenuShow(isMenuShow);
  };

  const scrollTo = (position) => {
    setPosition(position);

    document
      .getElementById(`${position}`)
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      <div
        className="homepage__header"
        style={visible ? { backgroundColor: 'hsla(0,0%,100%,.9)' } : {}}
        ref={navDOM}
      >
        <img
          className="homepage-logo"
          src="static/images/homepage-logo.svg"
          alt="logo"
          style={visible ? { opacity: '1' } : { opacity: '0' }}
        />
        <div className="navbar">
          <div className="navbar-button">START YOUR PROJECT</div>
          <div className="navbar-menu" onClick={onSideMenuDisplay}>
            <svg
              width="30"
              height="22"
              viewBox="0 0 30 22"
              fill={visible ? '#414042' : '#FFFFFF'}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.36036 2.58621C0.24024 2.42529 0.15015 2.25862 0.0900901 2.08621C0.0300297 1.91379 0 1.71264 0 1.48276C0 1.27586 0.0300297 1.08046 0.0900901 0.896552C0.15015 0.712643 0.24024 0.551725 0.36036 0.413793C0.480481 0.275861 0.62062 0.172414 0.780781 0.103448C0.940942 0.0344824 1.11111 0 1.29129 0H28.7087C28.8889 0 29.0591 0.0344824 29.2192 0.103448C29.3794 0.172414 29.5195 0.275861 29.6396 0.413793C29.7598 0.551725 29.8498 0.712643 29.9099 0.896552C29.97 1.08046 30 1.27586 30 1.48276C30 1.71264 29.97 1.91379 29.9099 2.08621C29.8498 2.25862 29.7598 2.42529 29.6396 2.58621C29.5195 2.72414 29.3794 2.82759 29.2192 2.89655C29.0591 2.96552 28.8889 3 28.7087 3H1.29129C1.11111 3 0.940942 2.96552 0.780781 2.89655C0.62062 2.82759 0.480481 2.72414 0.36036 2.58621ZM29.6396 10.4186C29.7598 10.5581 29.8498 10.7209 29.9099 10.907C29.97 11.093 30 11.2907 30 11.5C30 11.7093 29.97 11.907 29.9099 12.093C29.8498 12.2791 29.7598 12.4419 29.6396 12.5814C29.5195 12.7209 29.3794 12.8256 29.2192 12.8953C29.0591 12.9651 28.8889 13 28.7087 13H1.29129C1.11111 13 0.940942 12.9651 0.780781 12.8953C0.62062 12.8256 0.480481 12.7209 0.36036 12.5814C0.24024 12.4419 0.15015 12.2791 0.0900901 12.093C0.0300297 11.907 0 11.7093 0 11.5C0 11.2907 0.0300297 11.093 0.0900901 10.907C0.15015 10.7209 0.24024 10.5581 0.36036 10.4186C0.480481 10.2791 0.62062 10.1744 0.780781 10.1047C0.940942 10.0349 1.11111 10 1.29129 10H28.7087C28.8889 10 29.0591 10.0349 29.2192 10.1047C29.3794 10.1744 29.5195 10.2791 29.6396 10.4186ZM29.6326 19.4138C29.7551 19.5517 29.8469 19.7126 29.9081 19.8966C29.9694 20.0805 30 20.2759 30 20.4828C30 20.7126 29.9694 20.9138 29.9081 21.0862C29.8469 21.2586 29.7551 21.4253 29.6326 21.5862C29.5101 21.7241 29.3672 21.8276 29.2039 21.8966C29.0406 21.9655 28.8671 22 28.6834 22H5.31661C5.1329 22 4.95939 21.9655 4.79609 21.8966C4.63279 21.8276 4.4899 21.7241 4.36743 21.5862C4.24495 21.4253 4.15309 21.2586 4.09186 21.0862C4.03062 20.9138 4 20.7126 4 20.4828C4 20.2759 4.03062 20.0805 4.09186 19.8966C4.15309 19.7126 4.24495 19.5517 4.36743 19.4138C4.4899 19.2759 4.63279 19.1724 4.79609 19.1034C4.95939 19.0345 5.1329 19 5.31661 19H28.6834C28.8671 19 29.0406 19.0345 29.2039 19.1034C29.3672 19.1724 29.5101 19.2759 29.6326 19.4138Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <LandingSection scrollTo={scrollTo} />
      <About />
      <Awards />
      <Ingradients />
      <Founder />
      <BrandExperience />
      <CarouselSection />
      {isMenuShow ? (
        <SideMenu
          scrollTo={scrollTo}
          onSideMenuDisplay={onSideMenuDisplay}
          position={position}
        />
      ) : null}
    </div>
  );
}

export default HomePage;
