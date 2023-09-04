import React from "react";
import { css, styled } from "styled-components";
import PropsTypes from "prop-types";
import ThemedHint from "../ThemedHint/ThemedHint";

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
  padding-right: 0;
  width: auto;
  font-weight: ${(props) => props.fontWidth};
  font-size: 20px;
  ${(props) =>
    props.isMargin &&
    css`
      margin-bottom: 0;
    `}
  ${(props) =>
    props.hintRight &&
    css`
      display: block;
    `}
  ${(props) =>
    props.small &&
    css`
      padding-right: 50%;
    `}
  ${(props) =>
    props.medium &&
    css`
      padding-right: 22%;
    `}
    
  ${(props) =>
    props.large &&
    css`
      padding-right: 0;
    `}

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

const HintContent = styled.div`
  position: absolute;
  top: 10%;
  left: 100%;
  padding-left: 10px;
`;

const ThemedLabel = (props) => {
  const {
    fieldName,
    children,
    small,
    medium,
    large,
    fontWidth,
    isMargin,
    hint,
    hintRight,
    width,
    padding,
  } = props;
  return (
    <StyledLabel
      htmlFor={fieldName}
      small={small}
      medium={medium}
      large={large}
      fontWidth={fontWidth}
      isMargin={isMargin}
      padding={padding}
      hintRight={hintRight}
      width={width}
    >
      {children}
      {/* {hint && (
        <HintContent>
          <ThemedHint field={fieldName}> {hint}</ThemedHint>
        </HintContent>
      )} */}
    </StyledLabel>
  );
};

ThemedLabel.propTypes = {
  fontWidth: PropsTypes.string,
};
ThemedLabel.defaultProps = {
  fontWidth: "0",
};

export default ThemedLabel;
