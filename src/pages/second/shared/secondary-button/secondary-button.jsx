import styled from "@emotion/styled";

const SecondaryButton = ({ children }) => {
  const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: white;
    color: black;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
  `;
  return <StyledButton>{children}</StyledButton>;
};

export default SecondaryButton;
