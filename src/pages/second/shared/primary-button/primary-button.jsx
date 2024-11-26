import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: ${(props) => (props.primary ? "none" : "1px solid #000")};
  background-color: ${(props) => (props.primary ? "#000" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const PrimaryButton = ({ children, primary }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default PrimaryButton;
