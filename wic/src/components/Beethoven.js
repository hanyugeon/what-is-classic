import React from "react";
import Accordion from "./accordion/Accordion";

const data = [
  {
    title: "엘리제를 위하여",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/s71I_EWJk7I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    ),
  },
  {
    title: "피아노 소나타",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CEb8brQHcGk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    ),
  },
  {
    title: "피아노 소나타",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/efA1S8hyBms"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    ),
  },
];

const Beethoven = () => {
  return (
    <div>
      <h3>베토벤</h3>
      {data.map((item, index) => (
        <div key={index}>
          <Accordion title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default Beethoven;
