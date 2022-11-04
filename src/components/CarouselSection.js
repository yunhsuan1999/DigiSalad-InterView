import '../styles/CarouselSection.scss';

const CAROUSEL_DESCRIPTION =
  'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.';

function CarouselSection() {
  return (
    <div className="carousel" id='carousel'>
      <img
        className="right-icon"
        src="static/images/carousel-right-icon.svg"
        alt="icon"
      />
      <div className="carousel__container">
        <div className="carousel__container__image">
          <img
            className="image"
            src="static/images/carousel-image.jpg"
            alt="carousel"
          />
          <div className="carousel__more">
            <img
              className="more"
              src="/static/images/carousel-view.svg"
              alt="line"
            />
          </div>
        </div>
        <div className="carousel__container__text">
          <div className="highlight">HIGHLIGHTED SHOWCASE</div>
          <div className="title">LP CLUB MOBILE APP</div>
          {/* <img className='red-dot' src='static/images/carousel-red-dot.svg' alt='dot'/> */}
          <div className="description">{CAROUSEL_DESCRIPTION}</div>
        </div>
      </div>

      <img
        className="left-icon"
        src="static/images/carousel-left-icon.svg"
        alt="icon"
      />
    </div>
  );
}

export default CarouselSection;
