import React from "react";
import styled from "styled-components";
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
      />
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
      />
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
  background: #c8a2c8;
  border-radius: 0.5rem;
  border-top: 1.5px solid #a28dc8;
`;

const Rachmaninoff = () => {
  return (
    <StyledContent>
      <h2>라흐마니노프</h2>
      {data.map((item, index) => (
        <StyledAccordion key={index}>
          <Accordion title={item.title} content={item.content} />
        </StyledAccordion>
      ))}
    </StyledContent>
  );
};

export default Rachmaninoff;
