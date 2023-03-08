import React from "react";
import Animate from "./Animate";
import squirtle from "../images/squirtle.png";
import trivia from "../images/trivia.png";
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
  ];
  const showProject = projList.map((project) => {
    let count = 0;
    count++;
    return (
      <div className="proj_container">
        <h2>{project.title}</h2>
        <img key={count} src={project.img} alt="screenshot of project" />
        <div>{project.desc}</div>
        {project.url ? <a href={project.url}>Learn more</a> : null}
      </div>
    );
  });
  return (
    <>
      <Animate title="Projects" />
      <div>{showProject}</div>
    </>
  );
}
