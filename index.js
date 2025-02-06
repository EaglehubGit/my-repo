import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const animals = {
  dolphin: {
    image: "/images/dolphin.jpg",
    facts: [
      "Dolphins have excellent eyesight and hearing.",
      "Dolphins are very social animals.",
      "Dolphins can jump up to 20 feet out of the water!"
    ]
  },
  lobster: {
    image: "/images/lobster.jpg",
    facts: [
      "Lobsters can live up to 100 years.",
      "Lobsters taste with their legs.",
      "Lobsters can regenerate lost claws."
    ]
  },
  starfish: {
    image: "/images/starfish.jpg",
    facts: [
      "Starfish have no brain or blood.",
      "Starfish can regenerate lost arms.",
      "There are over 2,000 species of starfish."
    ]
  }
};

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const animalName = e.target.alt;
  const animalFacts = animals[animalName].facts;
  const randomIndex = Math.floor(Math.random() * animalFacts.length);
  const funFact = animalFacts[randomIndex];

  document.getElementById("fact").innerHTML = funFact;
}

const showBackground = true;

const animalFacts = (
  <div>
    <h1>{title || "Click an animal for a fun fact!"}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(animalFacts);
