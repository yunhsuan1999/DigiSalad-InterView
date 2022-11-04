import '../styles/Founder.scss';

const FOUNDER_TEXT = `A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the right experience to the <a style="text-decoration: none; color: #FFBC58;">right person at the right time</a>. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.`;

const Founder = () => {
  return (
    <div className="founder">
      <div className="founder-left">
        <div className="director-image" />
        <div className="director-name">TONY NG</div>
        <div className="director-title">Founder & Creative Director</div>
      </div>

      <div className="founder-right">
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
  );
};

export default Founder;
