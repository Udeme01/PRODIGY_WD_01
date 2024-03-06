import supportImg from "../../src/images/support/support_vr_mobile.jpg";
import supportDesktopImg from "../../src/images/support/support_hero_desktop.jpg";

const Support = () => {
  return (
    <>
      <section className="supportHero">
        <div className="overlay">
          <h1>
            immersive experiences that <span className="deliver">deliver</span>
          </h1>
        </div>
      </section>
      <div className="hereToSupport">
        <h1>We're here to support</h1>
      </div>
      <section className="formSection">
        <picture className="supportImg">
          <source
            className="sourceImg"
            media="(min-width: 1024px)"
            srcSet={supportDesktopImg}
          />
          <img src={supportImg} alt="interactive VR" />
        </picture>
        <form className="form">
          <div className="formControl">
            <div className="formControlChild">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="formControlChild">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter a valid email address"
              />
            </div>
            <div className="formControlChild">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="textarea"
                placeholder="Enter your message"
              />
            </div>
          </div>
          <p className="form-actions">
            <button type="submit" className="formBtn">
              submit
            </button>
          </p>
        </form>
      </section>
    </>
  );
};

export default Support;
