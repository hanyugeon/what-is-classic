import React from "react";
import Accordion from "./accordion/Accordion";

const data = [
  {
    title: "녹턴",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tSAwZP8e-zQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "스케르초",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OCUSalQf-jY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "콘체르토",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/614oSsDS734"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
];

const Chopin = () => {
  return (
    <div>
      <h3>쇼팽</h3>
      {data.map((item, index) => (
        <div key={index}>
          <Accordion title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default Chopin;
