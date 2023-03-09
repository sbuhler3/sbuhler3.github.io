import React from "react";
import Animate from "./Animate";
import squirtle from "../images/squirtle.png";
import trivia from "../images/trivia.png";
import tenzies from "../images/tenzies.png";
export default function Project() {
  const projList = [
    {
      title: "Personal Pokedex",
      img: squirtle,
      desc: "App written in Django framework. Created for my nephew. Allows you to search for any pokemon #'s 1-905, gives you a description of the pokemon, what type they are, where they can be found in different games, and what moves are strong/weak against them",
      url: "https://sbuhler3.pythonanywhere.com/pokemon/",
    },
    {
      title: "Quiz Game",
      img: trivia,
      desc: "Written using Reactjs. Game randomly populates trivia, you are allowed one guess per question. Once you have answered all questions you can check to see how many you guessed correctly.",
    },
    {
      title: "Tenzies",
      img: tenzies,
      desc: "App written using Reactjs. Object of game is to get all dice matching. App tracks state of each individual die until they each match. Allows you to lock a die in place while rolling the 'unlocked' dice.",
    },
  ];
  const showProject = projList.map((project) => {
    let count = 0;
    count++;
    return (
      <div className="proj_container">
        <h2 className="project_title">{project.title}</h2>
        <img
          className="project_img"
          key={count}
          src={project.img}
          alt="screenshot of project"
        />
        <div className="project_desc">{project.desc}</div>
        {project.url ? (
          <a
            className="project_url"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit Site
          </a>
        ) : null}
      </div>
    );
  });

  return (
    <>
      <Animate title="Projects" />
      <div className="grid">{showProject}</div>
    </>
  );
}
