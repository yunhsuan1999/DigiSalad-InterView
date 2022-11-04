import '../styles/SideMenu.scss';

const SideMenu = ({ onSideMenuDisplay, scrollTo }) => {
  return (
    <div className="side-menu">
      <div className="background">
        <div className="side-menu__header">
          <img
            className="logo"
            src="static/images/side-menu-logo.svg"
            alt="logo"
          />
          <img
            className="close-button"
            onClick={() => onSideMenuDisplay(false)}
            src="static/images/side-menu-close-button.svg"
            alt="close"
          />
        </div>
        <div className="menu">
          <div className="side-menu__container">
            <div className="left">
              <div
                className="about-us"
                onClick={() => {
                  onSideMenuDisplay(false);
                  scrollTo('about');
                }}
              >
                <img
                  className="image"
                  src="static/images/ingradients-leaf.svg"
                  alt="leaf"
                />
                <div className="text">
                  <div className="slogan">EMPOWERING BRANDS</div>
                  <div className="title-container">
                    <div className="title">ABOUT US</div>
                  </div>
                </div>
              </div>
              <div
                className="works"
                onClick={() => {
                  onSideMenuDisplay(false);
                  scrollTo('carousel');
                }}
              >
                <div className="items">
                  <img
                    className="image"
                    src="static/images/ingradients-tomato.svg"
                    alt="leaf"
                  />
                  <div className="text">
                    <div className="slogan">CASE STUDIES</div>
                    <div className="title-container">
                      <div className="title">WORKS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="middle">
              <div className="careers">
                <div className="items">
                  <img
                    className="image"
                    src="static/images/ingradients-cheese.svg"
                    alt="cheese"
                  />
                  <div className="slogan">BE COOL WITH US</div>
                  <div className="title-container">
                    <div className="title">CAREERS</div>
                  </div>
                </div>
              </div>

              <div className="insights">
                <div className="items">
                  <img
                    className="image"
                    src="static/images/side-menu-cactus.svg"
                    alt="cheese"
                  />
                  <div className="slogan">OUR STRATEGIES</div>
                  <div className="title-container">
                    <div className="title">INSIGHTS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <div
                className="services"
                onClick={() => {
                  onSideMenuDisplay(false);
                  scrollTo('ingradients');
                }}
              >
                <div className="items">
                  <img
                    className="image"
                    src="static/images/side-menu-carrot.svg"
                    alt="carrot"
                  />
                  <div className="slogan">AREAS OF EXPERTISE</div>
                  <div className="title-container">
                    <div className="title">SERVICES</div>
                  </div>
                </div>
              </div>
              <div className="contact">
                <div className="items">
                  <div className="slogan">START YOUR JOURNEY WITH US</div>
                  <div className="title-container">
                    <div className="title">CONTACT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
