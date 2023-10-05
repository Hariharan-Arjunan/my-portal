import React, { useState } from "react";
import { styled } from "styled-components";

const ThemedLabel = styled.label`
  cursor: pointer;
  ${(props) =>
    props.isChecked && `background-color : ${props.theme.input.disabled}`}
`;

const StyledInput = styled.input`
  /* display: none; */
`;

const RadioGroupWrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 10%;
  height: 5%;
  padding: 10px;
  background-color: ${(props) => props.theme.primary};
  display: block;
  text-align: center;
  margin: 5px 20px 5px 0;
  border-radius: 30px;
  cursor: pointer;
  ${(props) =>
    props.isChecked && `background-color : ${props.theme.input.disabled}`}
`;

const ThemedRadioGroupInput = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const { options } = props;

  return (
    <RadioGroupWrapper {...props}>
      {options.map((option) => {
        return (
          <Container onChange={(e) => setSelectedOption(e.target.value)}>
            <ThemedLabel
              htmlFor={option.value}
              isChecked={option.value === selectedOption}
            >
              <StyledInput
                type="radio"
                value={option.value}
                key={option.value}
                id={option.value}
              />
            </ThemedLabel>
          </Container>
        );
      })}
    </RadioGroupWrapper>
  );
};

export default ThemedRadioGroupInput;
