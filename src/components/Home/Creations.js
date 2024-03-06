import React, { useState } from "react";
import data from "../../data-mobile";

const Creations = () => {
  const [cards, setCards] = useState(data);
  return (
    <section className="creation-mobile">
      <h2>Our Creations</h2>
      <section>
        {cards.map((card) => {
          const { id, title, image } = card;
          return (
            <article key={id}>
              <div className="img-div">
                <img src={image} alt="creations card" />
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </section>
      <div className="btn-container">
        <button type="button" className="btn">see all</button>
      </div>
    </section>
  );
};

export default Creations;
