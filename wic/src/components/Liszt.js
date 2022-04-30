import React from "react";
import Accordion from "./accordion/Accordion";

const data = [
  {
    title: "라 캄파넬라",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/M0U73NRSIkw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "헝가리안 랩소디",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6oGEN7oS2z4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
];

const Liszt = () => {
  return (
    <div>
      <h3>리스트</h3>
      {data.map((item, index) => (
        <div key={index}>
          <Accordion title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default Liszt;
