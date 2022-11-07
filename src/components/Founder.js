import '../styles/Founder.scss';

const FOUNDER_TEXT = `A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the right experience to the <a style="text-decoration: none; color: #FFBC58;">right person at the right time</a>. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.`;

const Founder = () => {
  return (
    <div className="founder">
      <div className="founder__container">
        <div className="founder__container-left">
          {/* //<div className="director-image" /> */}
          <div className="director-image">
            <img
              className="image"
              src="static/images/founder-creative-director.png"
              alt=""
            />
          </div>
          <div className="director-name">TONY NG</div>
          <div className="director-title">Founder & Creative Director</div>
        </div>

        <div className="founder__container-right">
          <img
            className="quotation-mark"
            src="/static/images/founder-quotemarks.svg"
            alt="quotemarks"
          />

          <span
            dangerouslySetInnerHTML={{
              __html: FOUNDER_TEXT
            }}
            className="quotation-text"
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
