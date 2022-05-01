import React from "react";
import styled from "styled-components";
import Accordion from "./accordion/Accordion";

const data = [
  {
    title: "사라방드",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/u-qHtYfktiQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    ),
  },
  {
    title: "메시아",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IUZEtVbJT5c"
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
  background: #c8a2c8;
  border-radius: 0.5rem;
  border-top: 1.5px solid #a28dc8;
`;

const Handel = () => {
  return (
    <StyledContent>
      <h2>핸델</h2>
      {data.map((item, index) => (
        <StyledAccordion key={index}>
          <Accordion title={item.title} content={item.content} />
        </StyledAccordion>
      ))}
    </StyledContent>
  );
};

export default Handel;
