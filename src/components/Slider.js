import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from "../data";
import Quote from "./img/quote.svg";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
    <header className="testApp-header">
    <h2 className="aboutTest">What Our Users Say</h2>
    <h1 className="titleTest">Find your community</h1>
  </header>
 
    <section className="section">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img className="quote" src={Quote} alt="quote" />
          
              <h4 className="text">{quote}</h4>
              <p>{name}</p>
              <p className="title">{title}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  </div>
  );
};

export default Slider;
