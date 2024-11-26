import React from "react";
import styled from "styled-components";
import StyledButton from "../../shared/primary-button/primary-button.jsx";
import ResentViewed from "../resent-viewed/resent-viewed.jsx";

const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 110px;
  justify-content: space-evenly;
  padding: 40px;
  background-color: #f9f9f9;
`;

const TextBlock = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;

  li {
    font-size: 16px;
    margin-bottom: 10px;

    &::before {
      content: "✔";
      color: #007bff;
      margin-right: 10px;
    }
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BestSellersContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BestSellersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const Notification = styled.div`
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
`;

const SellerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SellerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SellerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SellerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const SellerName = styled.div`
  font-size: 14px;

  small {
    color: #888;
  }
`;

const FollowButton = styled(StyledButton)`
  font-size: 14px;
  padding: 5px 15px;
`;

const ResentViewedPosition = styled.div`
  bottom: 100px;
  right: 207px;
  position: absolute;
`;

const Collector = () => {
  const bestSellers = [
    {
      name: "Alex Co.",
      user: "@alex",
      img: "../../../../../src/pages/second/images/Mask Group-1.png",
    },
    {
      name: "July.Sx",
      user: "@july",
      img: "../../../../../src/pages/second/images/Mask Group-2.png",
    },
    {
      name: "Treasure Pk",
      user: "@treasure",
      img: "../../../../../src/pages/second/images/Mask Group-3.png",
    },
    {
      name: "Treasure Pk",
      user: "@treasure",
      img: "../../../../../src/pages/second/images/Mask Group-3.png",
    },
    {
      name: "Treasure Pk",
      user: "@treasure",
      img: "../../../../../src/pages/second/images/Mask Group-3.png",
    },
    {
      name: "Alex Co.",
      user: "@alex",
      img: "../../../../../src/pages/second/images/Mask Group-1.png",
    },
  ];

  return (
    <LayoutContainer>
      <TextBlock>
        <Title>Just Unleash - Your Inner Collector</Title>
        <DescriptionList>
          <li>Best Seller All Around World</li>
          <li>$2M+ Transactions Every Day</li>
          <li>Secure Transactions</li>
          <li>Exclusive Collections From Sellers</li>
          <li>Easy Buying and Selling</li>
          <li>Join Our Community</li>
        </DescriptionList>
        <StyledButton primary={true}>Explore More →</StyledButton>
      </TextBlock>

      <RightBlock>
        <BestSellersContainer>
          <BestSellersHeader>
            <HeaderTitle>Best Sellers</HeaderTitle>
            <Notification>New Sold: Rotation 62ETH</Notification>
          </BestSellersHeader>
          <SellerList>
            {bestSellers.map((seller, index) => (
              <SellerItem key={index}>
                <SellerInfo>
                  <SellerImage src={seller.img} alt={seller.name} />
                  <SellerName>
                    {seller.name} <br />
                    <small>{seller.user}</small>
                  </SellerName>
                </SellerInfo>
                <FollowButton>
                  {index === 2 ? "Unfollow" : "Follow"}
                </FollowButton>
              </SellerItem>
            ))}
          </SellerList>
        </BestSellersContainer>
        <ResentViewedPosition>
          <ResentViewed />
        </ResentViewedPosition>
      </RightBlock>
    </LayoutContainer>
  );
};

export default Collector;
