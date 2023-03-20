import React from "react";
import Animate from "./Animate";
import squirtle from "../images/squirtle.png";
import trivia from "../images/trivia.png";
import FitTrack from "../images/Fittrack.png";
export default function Project() {
  const projList = [
    {
      title: "FitTrack",
      img: FitTrack,
      desc: "Full Stack App written in Reactjs, Nodejs, MySql. Users signs up and app computes the target heart-rates the user should be working out at. Can add, edit, delete, sort strength and cardio exercise logs",
      url: "https://fit-tracks.com/",
    },
    {
      title: "Personal Pokedex",
      img: squirtle,
      desc: "Full Stack App written in Django framework. Created for my nephew. Allows you to search for any pokemon #'s 1-905, gives you a description of the pokemon, what type they are, where they can be found in different games, and what moves are strong/weak against them",
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
