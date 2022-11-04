import '../styles/Awards.scss';

const AWARDS_TEXT =
  'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.';

const Awards = () => {
  return (
    <div className="awards">
      <div className="awards-left">
        <div className="awards__title">
          <img
            className="text"
            src="/static/images/awards-title.svg"
            alt="text"
          />
          <img
            className="underline"
            src="/static/images/awards-title-underline.svg"
            alt="line"
          />
        </div>
        <div className="awards__text">{AWARDS_TEXT}</div>
      </div>

      <div className="awards-right">
        <div className="awards__image">
          <img
            className="image"
            src="/static/images/awards-asia-smart-app.svg"
            alt="awards"
          />
          <img
            className="image"
            src="/static/images/awards-asia-smart-app.svg"
            alt="awards"
          />
          <img
            className="image"
            src="/static/images/awards-asia-smart-app.svg"
            alt="awards"
          />
          <img
            className="image"
            src="/static/images/awards-asia-smart-app.svg"
            alt="awards"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
