import React from "react";
import { styled } from "styled-components";
import ThemedLabel from "../ThemedLabel/ThemedLabel";
import ThemedErrorMessage from "../ThemedErrorMessage/ThemedErrorMessage";

const Container = styled.div`
  margin: 24px 0;
`;

const InputContainer = styled.div`
  display: flex;
`;

const FormField = (props) => {
  const { children, title, errorMessage } = props;
  return (
    <Container>
      <ThemedLabel>{title}</ThemedLabel>
      <InputContainer>{children}</InputContainer>
      {errorMessage && !!errorMessage.length && (
        <ThemedErrorMessage>{errorMessage}</ThemedErrorMessage>
      )}
    </Container>
  );
};

export default FormField;
