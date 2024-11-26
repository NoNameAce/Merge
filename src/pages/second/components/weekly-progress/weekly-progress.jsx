import React from "react";
import styled from "@emotion/styled";
import RecentViewed from "../resent-viewed/resent-viewed.jsx";
import Card from "../../shared/cards/cards.jsx";
import NavigationButtons from "../navigation/navigation.jsx";

const AppContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 50px 0px;
  background-color: rgba(241, 241, 241, 1);
`;

const H1 = styled.h1`
  color: rgba(197, 197, 197, 1);
  font-size: 48px;
  font-weight: bold;
`;

const Cards = styled.div`
  display: flex;
  gap: 10px;
`;

const WeeklyProgress = () => {
  return (
    <AppContainer>
      <H1>Weekly - Top NFT</H1>
      <Cards>
        <Card
          img={"../../../../../src/pages/second/images/Mask Group.png"}
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
          img={"../../../../../src/pages/second/images/Mask Group-4.png"}
        ></Card>
      </Cards>
      <NavigationButtons></NavigationButtons>
      <RecentViewed />
    </AppContainer>
  );
};

export default WeeklyProgress;
