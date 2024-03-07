import supportImg from "../../src/images/support/support_vr_mobile.jpg";
import supportDesktopImg from "../../src/images/support/support_hero_desktop.jpg";
import { useState } from "react";

const Support = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setInputs({
      name: "",
      email: "",
      message: "",
    });

    alert("Message sent successfully");
  };

  const handleChange = (identifier, event) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [identifier]: event.target.value,
    }));
  };

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
        <form onSubmit={handleSubmit} className="form">
          <div className="formControl">
            <div className="formControlChild">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={inputs.name}
                onChange={(event) => handleChange("name", event)}
              />
            </div>
            <div className="formControlChild">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter a valid email address"
                value={inputs.email}
                onChange={(event) => handleChange("email", event)}
              />
            </div>
            <div className="formControlChild">
              <label htmlFor="message">Message</label>
              <textarea
                required
                id="message"
                name="textarea"
                placeholder="Enter your message"
                value={inputs.message}
                onChange={(event) => handleChange("message", event)}
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
