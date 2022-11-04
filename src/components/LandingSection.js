import '../styles/LandingSection.scss';

const LandingSection = ({ scrollTo }) => {
  return (
    <div className="landing">
      <video autoPlay muted loop id="landing-video" className="landing-video">
        <source src="/static/videos/homepage-video.mp4" type="video/mp4" />
      </video>
      <div className="landing__filter" />

      <div className="landing__side">
        <img
          className="side-text"
          src="/static/images/landing-text-degree90.svg"
          alt="text"
        />
        <img
          className="side-line"
          src="/static/images/landing-line-degree90.svg"
          alt="line"
        />
      </div>

      <div className="landing__container">
        <img
          className="logo"
          src="/static/images/landing-logo.svg"
          alt="logo"
        />
        <div className="slogan__line">
          <img
            className="slogan"
            src="/static/images/landing-slogan.svg"
            alt="slogan"
          />
        </div>
      </div>

      <div className="landing__bottom">
        <div
          className="bottom-container"
          onClick={() => {
            scrollTo('about');
          }}
        >
          <img
            className="salad"
            src="/static/images/landing-salad.svg"
            alt="salad"
          />
          <div className="bottom-text">TASTE US NOW!</div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
