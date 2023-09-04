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
  const { children, title, errorMessages } = props;
  return (
    <Container>
      <ThemedLabel>{title}</ThemedLabel>
      <InputContainer>{children}</InputContainer>
      {errorMessages && !!errorMessages.length && (
        <ThemedErrorMessage>{errorMessages[0].message}</ThemedErrorMessage>
      )}
    </Container>
  );
};

export default FormField;
