import React from "react";
import styled from "styled-components";

const StyledCategory = styled.div`
  background: #c8c8c8;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

const Home = () => {
  return (
    <StyledCategory>
      <h2>What Is Classic, 클래식이란 무엇일까요?</h2>
      <h3>클래식은 배워야만 하는걸까요?</h3>
      <p>제 대답은 "아닙니다".</p>
      <br />

      <h3>혹시라도 익숙한게 하나라도...?</h3>
      <p>익숙한 작곡가와 작품이 있다면 들어보세요.</p>
      <p>그리고 그와 관련된 스토리와 다른 작품들도 찾아보세요.</p>
      <br />

      <h3>당신은 클래식과 친한가요?</h3>
      <p>괜찮아요, 지금부터 친해지면 된답니다!</p>
      <p>지금부터 흥미로워 보이는 메뉴 아무곳에나 들어가 보세요.</p>
    </StyledCategory>
  );
};

export default Home;
