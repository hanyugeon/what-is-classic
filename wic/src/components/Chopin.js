import React from "react";
import styled from "styled-components";
import Accordion from "./accordion/Accordion";

const data = [
  {
    title: "에튀드",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/G10qXpF3cqI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p>영화 "말할 수 없는 비일"에 나왔던 "흑건" 이에요</p>
      </div>
    ),
  },
  {
    title: "녹턴",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QR10Od1cLaM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p>쇼팽의 녹턴중 가장 유명한 녹턴 2번 입니다.</p>
      </div>
    ),
  },
  {
    title: "스케르초",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/S94Nh-bSomo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p>
          해학적인 이라는 뜻을 가진 "스케르초"라는 곡이에요 쇼팽의 스케르초
          작품중에서 가장 대중적인 스케르초 2번 이에요
        </p>
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
          src="https://www.youtube.com/embed/614oSsDS734"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p>
          1번 콘체르토 지만 사실 2번째로 만들어진 쇼팽의 피아노 협주곡이에요.
          19살의 쇼팽의 첫사랑 "콘스탄챠"를 그리며 만들었다고 합니다. 피아노
          위주의 협주곡으로 오케스트라를 제외하고 피아노로만 연주해도 어색함이
          별로 없는 매력적인 작품이에요.
        </p>
      </div>
    ),
  },
  {
    title: "발라드",
    content: (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pe-GrRQz8pk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p>
          쇼팽의 4개의 발라드 중 4번째 작품이에요. 절망적이고 비참한 심경을
          드러내듯 대단히 고뇌에 차있고 어두우며 격정적이에요. 중간에 곡이
          서정적으로 끝난것같이 전개 되다가 이후 그 분위기를 깨버리고
          비희망적으로 마무리 되는 전개가 매우 인상깊고 슬픈 곡이에요.
        </p>
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

const Chopin = () => {
  return (
    <StyledContent>
      <h2>쇼팽</h2>
      {data.map((item, index) => (
        <StyledAccordion key={index}>
          <Accordion title={item.title} content={item.content} />
        </StyledAccordion>
      ))}
    </StyledContent>
  );
};

export default Chopin;
