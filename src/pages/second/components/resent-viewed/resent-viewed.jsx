import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
  width: 350px;
  position: absolute;
  bottom: -110px;
  right: 110px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.bgColor || "#ddd"};
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const UserStatus = styled.span`
  font-size: 14px;
  color: #888;
`;

const Amount = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.isPositive ? "green" : "red")};
`;

const RecentViewed = () => {
  const data = [
    {
      id: 1,
      name: "Alex C.",
      status: "A.key",
      amount: "$4,456",
      isPositive: true,
      avatarColor: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    },
    {
      id: 2,
      name: "Jullya S.",
      status: "Jully45",
      amount: "$3,227",
      isPositive: false,
      avatarColor: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    },
  ];

  return (
    <Card>
      <Title>Recent Viewed</Title>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <UserInfo>
              <Avatar bgColor={item.avatarColor} />
              <UserDetails>
                <UserName>{item.name}</UserName>
                <UserStatus>{item.status}</UserStatus>
              </UserDetails>
            </UserInfo>
            <Amount isPositive={item.isPositive}>{item.amount}</Amount>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default RecentViewed;
