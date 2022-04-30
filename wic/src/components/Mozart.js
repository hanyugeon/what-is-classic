import React from "react";
import Accordion from "./accordion/Accordion";

const data = [
  {
    title: "피아노 소나타",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1vDxlnJVvW8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    ),
  },
  {
    title: "피아노 콘체르토",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hm9SSSD-_eQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    ),
  },
  {
    title: "교향곡",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RPWjixqYBFs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    ),
  },
];

const Mozart = () => {
  return (
    <div>
      <h3>모차르트</h3>
      {data.map((item, index) => (
        <div key={index}>
          <Accordion title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default Mozart;
