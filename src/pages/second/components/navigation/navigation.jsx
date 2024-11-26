import React from "react";
import styled from "@emotion/styled";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // Для стрелок используем react-icons

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 10px 20px;
  width: 120px;
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background: #ddd;
`;

const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #555;
  font-size: 18px;

  &:hover {
    color: #000;
  }
`;

const NavigationButtons = () => {
  return (
    <ButtonContainer>
      <Button>
        <FiArrowLeft />
      </Button>
      <Divider />
      <Button>
        <FiArrowRight />
      </Button>
    </ButtonContainer>
  );
};

export default NavigationButtons;
