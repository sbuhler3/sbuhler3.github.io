import React from "react";
import Animate from "./Animate";
import spencer from "../images/Spencer.png";

export default function About() {
  return (
    <>
      <Animate title="About Me" />
      <main className="about_container">
        <img src={spencer} alt="profile" className="picture" />
        <div className="about_text">
          I am a software engineer who is graduating with a B.S. in Software
          Engineering in June 2023. I have experience in the Full-Stack through
          a variety of languages. I am most comfortable with Python, Javascript,
          HTML, CSS, and the React framework. I have experience with Java, C++,
          and Django. <br />
          <br />
          Through the encouragement of friends and colleagues, my journey in
          software started as a self-taught programmer. I built my first project
          for my nephew who loves Pokemon. I created a personalized Pokedex that
          allowed him to search 900+ Pokemon. His excitement for the app along
          with my excitement about building a working program helped me decide
          to pursue a degree and make a career of this newfound skillset.
          <br />
          <br />I love the flexibility involved in programming along with
          knowing when you have a concrete result. I love the feeling of
          conquering a nagging problem that makes code work or optimizes your
          existing code. My interests are creating responsive designs, and
          scalable features, and using machine learning to enhance people's
          lives.
          <br />
          <br />
          Outside of my engineering skillset, I hold a Doctorate in Physical
          Therapy. Working in this field previously became the foundation for
          building soft skills such as connecting, collaborating, and adapting
          to a person's needs.
        </div>
      </main>
    </>
  );
}
