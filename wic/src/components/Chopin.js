import React from "react";
import Accordion from "./accordion/Accordion";

const data = [
  {
    title: "에튀드",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/G10qXpF3cqI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "녹턴",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QR10Od1cLaM"
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
        src="https://www.youtube.com/embed/S94Nh-bSomo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "피아노 콘체르토",
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
  {
    title: "발라드",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pe-GrRQz8pk"
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
