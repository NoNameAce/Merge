import React from "react";
import styled from "styled-components";
import StyledButton from "../../shared/primary-button/primary-button.jsx";

const Container = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  display: flex;
  margin-top: 90px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const FAQHeader = styled.div`
  text-align: center;

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    color: #888;
  }
`;

const FAQList = styled.ul`
  list-style: none;
  width: 90%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const QuestionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: #888;
  }
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background-color: #000;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #fff;
  }

  p {
    font-size: 14px;
    color: #888;
  }
`;

const BannerButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const BannerImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
`;
const FAQ = () => {
  const faqItems = [
    "What is an NFT?",
    "What can I use NFTs for?",
    "What is the difference between an NFT and cryptocurrency?",
    "How much is an NFT worth?",
    "How do I purchase an NFT on your platform?",
  ];
  return (
    <Container>
      {/* FAQ */}
      <FAQHeader>
        <h2>Frequently Asked Questions</h2>
        <p>Questions</p>
      </FAQHeader>
      <FAQList>
        {faqItems.map((item, index) => (
          <QuestionItem key={index}>
            <span>{item}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </QuestionItem>
        ))}
      </FAQList>

      <Banner>
        <BannerText>
          <h3>Create and Sell NFTs</h3>
          <p>World's Largest NFT Place</p>
          <BannerButtons>
            <StyledButton>Explore More</StyledButton>
            <StyledButton primary={true}>Sell Artwork</StyledButton>
          </BannerButtons>
        </BannerText>
        <BannerImage
          src="../.../../../../../../src/pages/second/images/Mask Group-1.png"
          alt="NFT Image"
        />
      </Banner>
    </Container>
  );
};

export default FAQ;
