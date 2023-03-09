import React from "react";
import { FaAward } from "react-icons/fa";
import Animate from "./Animate";

export default function Certification() {
  const certList = [
    {
      title: "COMPTIA Project+",
      desc: "Certification that gives IT Pros the basic concepts to successfully manage small to medium projects.",
    },
    {
      title: "ITIL 4 Foundation",
      desc: "Certification that enables candidates to look at IT Service Management through an end-to-end operating model for the creation, delivery and continual improvement of tech-enabled products and services.",
    },
    {
      title: "Django for Everybody",
      desc: "Through the University of Michigan this specialization had students build online web sites using Django that were graded throughout four courses.",
    },
    {
      title: "Python for Everybody",
      desc: "Through the University of Michigan this specialization taught fundamental programming concepts. These included data structures, networked API, and databases using the Python language.",
    },
  ];
  const printList = certList.map((cert) => {
    let count = 0;
    count++;
    return (
      <li key={count} className="cert_item">
        <h2 className="cert_heading">
          <FaAward className="cert_icon" />
          {cert.title}
        </h2>
        <div className="cert_desc">{cert.desc}</div>
      </li>
    );
  });
  return (
    <div>
      <Animate title="Certifications" />
      <ul className="cert_container">{printList}</ul>
    </div>
  );
}
