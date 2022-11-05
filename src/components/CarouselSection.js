import '../styles/CarouselSection.scss';
import { useState } from 'react';

const CAROUSEL_ITEMS = [
  {
    src: 'static/images/carousel-image.jpg',
    highlight: 'HIGHLIGHTED SHOWCASE',
    title: 'LP CLUB MOBILE APP',
    description:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.'
  },
  {
    src: 'static/images/carousel-image.jpg',
    highlight: 'HIGHLIGHTED SHOWCASE 2',
    title: '2',
    description:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.'
  },
  {
    src: 'static/images/carousel-image.jpg',
    highlight: 'HIGHLIGHTED SHOWCASE 3',
    title: '3',
    description:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.'
  }
];

const value = CAROUSEL_ITEMS.length;

const CarouselSection = () => {
  const [index, setIndex] = useState(0);

  const onRightClick = () => {
    if (index - value + 1 < -1) {
      setIndex(index - 1 + value);
    } else {
      setIndex(index - 1);
    }
  };

  const onLeftClick = () => {
    if (value - 1 > index) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="carousel" id="carousel">
      <div className="page">
        <div className="page-index">
          {index < 10 ? '0' + (index + 1) : index + 1}
        </div>
        <div className="page-index-of" />
        <div className="page-amount">{value < 10 ? '0' + value : value}</div>
      </div>
      <div className="carousel__container">
        <img
          className="right-icon"
          src="static/images/carousel-right-icon.svg"
          alt="icon"
          onClick={onRightClick}
        />

        <div className="center-items">
          <div className="center-items__image">
            <img
              className="image"
              src={CAROUSEL_ITEMS[index].src}
              alt="carousel"
            />
            <div className="carousel__more">
              <img
                className="more"
                src="static/images/carousel-view.svg"
                alt="line"
              />
            </div>
          </div>

          <div className="center-items__text">
            <div className="highlight">{CAROUSEL_ITEMS[index].highlight}</div>
            <div className="title-container">
              <div className="title">{CAROUSEL_ITEMS[index].title}</div>
            </div>
            <div className="description">
              {CAROUSEL_ITEMS[index].description}
            </div>
          </div>
        </div>

        <div className="left-items">
          <img
            className="left-icon"
            src="static/images/carousel-left-icon.svg"
            alt="icon"
            onClick={onLeftClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
