import React from "react";
import styled from "styled-components";
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

const Liszt = () => {
  return (
    <StyledContent>
      <h2>리스트</h2>
      {data.map((item, index) => (
        <StyledAccordion key={index}>
          <Accordion title={item.title} content={item.content} />
        </StyledAccordion>
      ))}
    </StyledContent>
  );
};

export default Liszt;
