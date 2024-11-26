/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import image_1 from "@/pages/second/images/image_1.png";
import image_2 from "@/pages/second/images/image_2.png";
import PrimaryButton from "../../shared/primary-button/primary-button";
import arrow from "@/pages/second/images/Arrow.png";

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: bottom;
  margin-top: 80px;
  padding: 40px 0px 40px 130px;
  background-color: #fff;
  height: 600px;
  font-family: "Arial", sans-serif;
`;

const TextContent = styled.div`
  max-width: 38%;
  position: relative;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  color: #000;
`;

const Subtitle = styled.p`
  margin: 20px 0;
  font-size: 16px;
  color: #555;
`;
const SubtitleSpan = styled.span`
  color: #000000;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const MainImage = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 20px;
  align-self: end;
`;

const SecondImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const ArrowImage = styled.img`
  width: 20%;
  height: 30%;
  //  left: 50;
  //  position: absolute;
`;

const Stats = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

const StatItem = css`
  text-align: center;

  & > h3 {
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    color: #000;
  }

  & > p {
    font-size: 14px;
    color: #555;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <TextContent>
        <Title>Discover And Create NFTs</Title>
        <Subtitle>
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a <SubtitleSpan> $20 bonus </SubtitleSpan>.
        </Subtitle>
        <ButtonGroup>
          <PrimaryButton primary>Explore More</PrimaryButton>
          <PrimaryButton>Create NFT</PrimaryButton>
        </ButtonGroup>
        <Stats>
          <div css={StatItem}>
            <h3>430K+</h3>
            <p>Art Works</p>
          </div>
          <div css={StatItem}>
            <h3>159K+</h3>
            <p>Creators</p>
          </div>
          <div css={StatItem}>
            <h3>87K+</h3>
            <p>Collections</p>
          </div>
        </Stats>
      </TextContent>

      <SecondImage src={image_2} />
      <ArrowImage src={arrow} alt="" />
      <MainImage src={image_1} alt="NFT Showcase" />
    </HeroContainer>
  );
};

export default HeroSection;
