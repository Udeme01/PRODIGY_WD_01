// import Showcase from "../components/Home/Showcase";
import aboutDesktopImg from "../../src/images/about/about_vr_desktop.jpg";
import aboutImg from "../../src/images/about/about_vr_mobile.jpg";

const About = () => {
  return (
    <>
      <section className="aboutHero">
        <div className="overlay">
          <h1>
            immersive experiences that <span className="deliver">deliver</span>
          </h1>
        </div>
      </section>
      <>
        <section className="interactive">
          <div className="interactiveImg">
            <picture>
              <source
                className="sourceImg"
                media="(min-width: 1024px)"
                srcSet={aboutDesktopImg}
              />
              <img src={aboutImg} alt="interactive VR" />
            </picture>
          </div>
          <div className="interactive-text">
            <h2> About Us</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        <button type="button" className="about-btn">
          Read More
        </button>
      </>
    </>
  );
};

export default About;
