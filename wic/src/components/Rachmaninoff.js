import React from "react";
import Accordion from "./accordion/Accordion";

const data = [
  {
    title: "프렐류드",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wkIfDqkt4vc"
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
        src="https://www.youtube.com/embed/aNMlq-hOIoc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
];

const Rachmaninoff = () => {
  return (
    <div>
      <h3>라흐마니노프</h3>
      {data.map((item, index) => (
        <div key={index}>
          <Accordion title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default Rachmaninoff;
