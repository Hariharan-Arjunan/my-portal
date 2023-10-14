import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 10px;
  margin: 10px 20px 10px 0;
  border-radius: 20px;
  cursor: pointer;
`;

const ThemedButton = (props) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default ThemedButton;
