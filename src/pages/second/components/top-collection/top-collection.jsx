import styled from "@emotion/styled";
import React from "react";
const TopCollection = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 140px 0px;
    margin-top: 40px;
  `;
  const Title = styled.h1`
    color: rgba(20, 20, 22, 1);
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  `;

  const TableContainer = styled.div`
    width: 90%;
    padding: 20px;
    font-family: Arial, sans-serif;
  `;

  const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  `;

  const TableHeader = styled.th`
    padding: 10px 15px;
    color: #555;
  `;

  const TableRow = styled.tr``;

  const TableCell = styled.td`
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
  `;

  const CollectionName = styled.div`
    display: flex;
    align-items: center;
  `;

  const CollectionImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  `;

  const Volume = styled.span`
    font-weight: bold;
  `;

  const Percentage = styled.span`
    color: green;
    font-weight: bold;
  `;

  const ExploreLink = styled.p`
    display: inline-block;
    margin-top: 60px;
    text-align: end;
    width: 100%;
    color: gray;

    &:hover {
      text-decoration: underline;
    }
  `;

  const data = [
    {
      name: "Alex Co.",
      author: "By Alex",
      volume: "8,456",
      percentage: "+27.78%",
      floorPrice: "3.5",
      owners: "2.2K",
      items: "500",
      image: "../../../../../src/pages/second/images/Mask Group-1.png",
    },
    {
      name: "Alex Co.",
      author: "By Alex",
      volume: "4,780",
      percentage: "+27.78%",
      floorPrice: "7.9",
      owners: "3.4K",
      items: "900",
      image: "../../../../../src/pages/second/images/Mask Group-2.png",
    },
    {
      name: "Alex Co.",
      author: "By Alex",
      volume: "8,456",
      percentage: "+27.78%",
      floorPrice: "3.5",
      owners: "2.2K",
      items: "500",
      image: "../../../../../src/pages/second/images/Mask Group-1.png",
    },
    {
      name: "Alex Co.",
      author: "By Alex",
      volume: "4,780",
      percentage: "+27.78%",
      floorPrice: "7.9",
      owners: "3.4K",
      items: "900",
      image: "../../../../../src/pages/second/images/Mask Group-2.png",
    },
  ];

  return (
    <div>
      <Container>
        <Title>Top Collection</Title>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>Collection</TableHeader>
                <TableHeader>Volume</TableHeader>
                <TableHeader>24h %</TableHeader>
                <TableHeader>Floor Price</TableHeader>
                <TableHeader>Owners</TableHeader>
                <TableHeader>Items</TableHeader>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <CollectionName>
                      <CollectionImage src={item.image} alt={item.name} />
                      <div>
                        <div>{item.name}</div>
                        <small>{item.author}</small>
                      </div>
                    </CollectionName>
                  </TableCell>
                  <TableCell>
                    <Volume>Ξ {item.volume}</Volume>
                  </TableCell>
                  <TableCell>
                    <Percentage>{item.percentage}</Percentage>
                  </TableCell>
                  <TableCell>Ξ {item.floorPrice}</TableCell>
                  <TableCell>{item.owners}</TableCell>
                  <TableCell>{item.items}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <ExploreLink href="#">Explore All →</ExploreLink>
        </TableContainer>
      </Container>
    </div>
  );
};

export default TopCollection;
