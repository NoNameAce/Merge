import styled from "@emotion/styled";
import React from "react";
import StyledButton from "@/pages/second/shared/primary-button/primary-button.jsx";

const Card = ({ img }) => {
  const Item = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  const BottomDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Img = styled.img`
    width: 100%;
  `;

  const H2 = styled.h2`
    font-size: 21px;
    font-weight: bold;
  `;

  const Span = styled.span`
    color: rgba(148, 163, 184, 1);
  `;

  const BottomDivLeft = styled.span`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Item>
      <Img src={img} alt="" />
      <H2>Sun-Glass</H2>
      <BottomDiv>
        <BottomDivLeft>
          <Span>Current bid</Span>
          <b>1.75</b>
        </BottomDivLeft>

        <StyledButton primary={true}>Place Bid</StyledButton>
      </BottomDiv>
    </Item>
  );
};

export default Card;
