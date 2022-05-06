import React from "react";
import styled from "styled-components";
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

const StyledContent = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  overflow: hidden;
`;

const StyledAccordion = styled.div`
  background: #969696;
  border-radius: 0.5rem;
  border-top: 1.5px solid #c8c8c8;
`;

const Mozart = () => {
  return (
    <StyledContent>
      <h2>모차르트</h2>
      {data.map((item, index) => (
        <StyledAccordion key={index}>
          <Accordion title={item.title} content={item.content} />
        </StyledAccordion>
      ))}
    </StyledContent>
  );
};

export default Mozart;
