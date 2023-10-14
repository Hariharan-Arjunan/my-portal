import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  font-size: 1rem;
  padding: 0.625rem 0.75rem;
  cursor: pointer;
`;

const StyledOption = styled.option`
  font-size: 1rem;
`;

const Container = styled.div`
  width: 50%;
`;

const ThemedDropdown = (props) => {
  const { options } = props;

  const renderOptions = () => {
    return options.map((option) => {
      return (
        <StyledOption value={option.value} key={option.label}>
          {option.label}
        </StyledOption>
      );
    });
  };
  return (
    <Container>
      <StyledSelect {...props}>
        <StyledOption value="" disabled>
          Please select...
        </StyledOption>
        {renderOptions()}
      </StyledSelect>
    </Container>
  );
};

export default ThemedDropdown;
