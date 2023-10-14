import React from "react";
import { styled } from "styled-components";

const RadioGroupWrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 80px;
  height: 40px;
  text-align: center;
  margin: 5px 20px 5px 0;
  border: ${(props) => props.theme.indigoDark} 2px solid;
  border-radius: 30px;
  cursor: pointer;

  ${(props) => props.isChecked && `background-color: red`}
`;

const ThemedLabel = styled.label`
  cursor: pointer;
  color: black;
`;

const StyledInput = styled.input`
  margin: 2px;
`;

const StyledName = styled.div`
  padding-top: 5px;
`;

const ThemedRadioGroupInput = (props) => {
  const { options, name } = props;

  return (
    <RadioGroupWrapper {...props}>
      {options.map((option) => {
        return (
          <Container>
            <StyledName>
              <StyledInput
                name={name}
                type="radio"
                value={option.value}
                checked={option.value === props.value}
                key={`${name}--${option.value}`}
                id={`${name}--${option.value}`}
              />
              {option.label}
              <ThemedLabel htmlFor={`${name}-${option.value}`}></ThemedLabel>
            </StyledName>
          </Container>
        );
      })}
    </RadioGroupWrapper>
  );
};

export default ThemedRadioGroupInput;
