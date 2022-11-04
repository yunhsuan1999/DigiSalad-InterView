import '../styles/BrandExperience.scss';

const EXPERIENCE_TEXT =
  'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.';

const BrandExperience = () => {
  return (
    <div className="experience">
      <div className="experience__title">
        <img
          className="text"
          src="/static/images/experience-title.svg"
          alt="text"
        />
        <img
          className="underline"
          src="/static/images/experience-title-underline.svg"
          alt="line"
        />
      </div>
      <div className="about__text">{EXPERIENCE_TEXT}</div>
      <div className="experience__brand-list">
        <img
          className="list"
          src="/static/images/experience-brand-list.svg"
          alt="brand-list"
        />
      </div>
    </div>
  );
};

export default BrandExperience;
