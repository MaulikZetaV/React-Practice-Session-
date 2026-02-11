import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className={`home ${activeCard !== null ? "home--blur" : ""}`}>
      {/* HERO */}
      <section className="home__intro">
        <h1>React Revision Project</h1>
        <p>
          A production-ready React revision project covering fundamentals,
          hooks, routing, API integration, CRUD operations, and clean architecture.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="home__projects">
        <h2>Project Overview</h2>

        <div className="home__cards">
          {[
            {
              title: "Mini Project 1",
              use: "Understanding core React state and form handling.",
              concepts: "JSX, useState, events, controlled components, validation",
            },
            {
              title: "Mini Project 2",
              use: "Fetching and displaying server data with user interaction.",
              concepts: "useEffect, API calls, loading/error states, search, filtering",
            },
            {
              title: "Mini Project 3",
              use: "Managing dynamic lists with full CRUD functionality.",
              concepts: "CRUD, props, state lifting, reusable components, keys",
            },
            {
              title: "Mini Project 4",
              use: "Writing scalable and maintainable React code.",
              concepts: "Clean architecture, services layer, separation of concerns",
            },
            {
              title: "Final Project",
              use: "Simulating a real-world React application workflow.",
              concepts:
                "CRUD, API integration, routing, dynamic routes, useParams, clean structure",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`home__card ${
                activeCard === index ? "home__card--active" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <h3>{card.title}</h3>
              <p>
                <span>Use Case:</span> {card.use}
              </p>
              <p>
                <span>Concepts:</span> {card.concepts}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="home__links">
  <h2>Revision & Learning Resources</h2>

  <div className="home__links-grid">
    <a
      href="https://github.com/MaulikZetaV/React-Practice-Session-"
      target="_blank"
      rel="noreferrer"
      className="home__link-card"
    >
      <h4>GitHub Repository</h4>
      <p>Complete React revision project source code</p>
    </a>

    <a
      href="https://1drv.ms/w/c/34f51f6a44a318a9/IQBBskZamplHS4bGuZ2xtvihAYMGQVZDseLYMmq0CaCOyK0?e=xSFRPo"
      target="_blank"
      rel="noreferrer"
      className="home__link-card"
    >
      <h4>JavaScript Notes</h4>
      <p>Core JavaScript concepts used in React</p>
    </a>

    <a
      href="https://chatgpt.com/share/698b1850-701c-8003-9f2b-bdb023dfd864"
      target="_blank"
      rel="noreferrer"
      className="home__link-card"
    >
      <h4>ChatGPT React Notes</h4>
      <p>Structured React explanations & Q&A</p>
    </a>
  </div>
</section>

    </div>
  );
};

export default Home;
