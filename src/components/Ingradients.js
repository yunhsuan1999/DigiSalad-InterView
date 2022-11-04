import '../styles/Ingradients.scss';

const INGRADIENTS_TEXT =
  'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.';
const INGRADIENTS_DESCRIPTION =
  'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.';
const INGRADIENTS_ITEMS_TITLE = [
  {
    items: 'leaf',
    titles: 'UX Design'
  },
  {
    items: 'tomato',
    titles: 'UI Design'
  },
  {
    items: 'cheese',
    titles: 'WEBSITE DEVELOPMENT'
  },
  {
    items: 'pickle',
    titles: 'MOBILE APP DEVELOPMENT'
  },
  {
    items: 'orange',
    titles: 'ECOMMERCE'
  },
  {
    items: 'kiwi',
    titles: 'CUSTOMER LOYALTY'
  },
  {
    items: 'watermelon',
    titles: 'DIGITAL TRANSFORMATION'
  },
  {
    items: 'corn',
    titles: 'DIGITAL MARKETING'
  },
  {
    items: 'apple',
    titles: 'BRANDING'
  }
];
const Ingradients = () => {
  return (
    <div className="ingradients" id="ingradients">
      <div className="ingradients__title">
        <img
          className="text"
          src="/static/images/ingradients-title.svg"
          alt="text"
        />
        <img
          className="underline"
          src="/static/images/ingradients-title-underline.svg"
          alt="line"
        />
      </div>
      <div className="ingradients__text">{INGRADIENTS_TEXT}</div>
      <div className="ingradients__more">
        <div className="more-button">
          <div className="text">OUR SERVICES</div>
          <div className="line" />
        </div>
      </div>
      <div className="items-container">
        {INGRADIENTS_ITEMS_TITLE.map(({ items, titles }) => (
          <div className="items" key={items}>
            <div className="circle">
              <img
                className="image"
                src={`/static/images/ingradients-${items}.svg`}
                alt="items"
              />
            </div>
            <div className="title">{titles}</div>
            <div className="description">{INGRADIENTS_DESCRIPTION}</div>
            <button className="more-button">VIEW MORE</button>
          </div>
        ))}
      </div>
      <div className="ingradients__bottom">
        <div className="text">VIEW MORE DIGISALAD’S INGRADIENTS</div>
      </div>
    </div>
  );
};

export default Ingradients;
