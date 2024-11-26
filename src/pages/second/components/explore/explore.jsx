import React from "react";
import styled from "styled-components";
import StyledComponent from "../../shared/primary-button/primary-button.jsx";
import Card from "../../shared/cards/cards.jsx";
import Container from "../../shared/container/container";
const Explore = () => {
  const Title = styled.h1`
    color: rgba(20, 20, 22, 1);
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  `;

  const Cards = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  `;
  const ExploreLink = styled.p`
    display: inline-block;
    margin-top: 60px;
    margin-right: 100px;
    text-align: end;
    width: 100%;
    color: gray;

    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <div className="bg-stone-50">
      <Title>Explore Marketplace</Title>
      <div className="flex gap-5 justify-center m-10">
        <StyledComponent>All</StyledComponent>
        <StyledComponent>Category</StyledComponent>
        <StyledComponent>Collectiun</StyledComponent>
        <StyledComponent>Price</StyledComponent>
      </div>
      <Container>
        <Cards>
          <Card
            img={"../../../../../src/pages/second/images/Mask Group (1).png"}
          ></Card>
          <Card
            img={"../../../../../src/pages/second/images/Mask Group-1.png"}
          ></Card>
          <Card
            img={"../../../../../src/pages/second/images/Mask Group-2.png"}
          ></Card>
          <Card
            img={"../../../../../src/pages/second/images/Mask Group-3.png"}
          ></Card>
          <Card
            img={"../../../../../src/pages/second/images/Mask Group-3.png"}
          ></Card>
          <Card
            img={"../../../../../src/pages/second/images/Mask Group-1.png"}
          ></Card>
          <Card
            img={"../../../../../src/pages/second/images/Mask Group (1).png"}
          ></Card>
          <Card
            img={"../../../../../src/pages/second/images/Mask Group-2.png"}
          ></Card>
        </Cards>
        <ExploreLink>Explore All</ExploreLink>
      </Container>
    </div>
  );
};

export default Explore;
