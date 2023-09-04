import React from "react";
import { styled } from "styled-components";

const ErrorContent = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.errorMessage};
`;

const ThemedErrorMessage = ({ children }) => {
  return <ErrorContent>{children}</ErrorContent>;
};

export default ThemedErrorMessage;
