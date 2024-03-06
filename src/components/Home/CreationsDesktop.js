import React, { useState } from "react";
import data from "../../data-desktop";

const CreationsDesktop = () => {
  const [cards, setCards] = useState(data);
  return (
    <section className="creation-desktop">
      <div className="title">
        <h2>Our Creations</h2>
        <div className="btn-container">
          <button type="button" className="btn">
            see all
          </button>
        </div>
      </div>
      <section>
        {cards.map((card) => {
          const { id, title, image } = card;
          return (
            <article key={id}>
              {/* <div className="img-div"> */}
                <img src={image} alt="creations card" />
              {/* </div> */}
              <h3>{title}</h3>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default CreationsDesktop;
