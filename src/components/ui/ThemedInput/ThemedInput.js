import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";

const DefaultInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  border: ${(props) =>
    props.hasError
      ? `2px solid ${props.theme.input.border.error}`
      : `1px solid ${props.theme.input.border.default}`};
  margin: 6px 0 12px 0;
  box-sizing: border-box;
  ${(props) =>
    props.upperCase &&
    css`
      text-transform: uppercase;
    `}
`;

const InputContainer = styled.div`
  position: relative;
  ${(props) =>
    props.xSmall &&
    css`
      width: 25%;
    `}
  ${(props) =>
    props.small &&
    css`
      width: 50%;
    `}
  ${(props) =>
    props.medium &&
    css`
      width: 78%;
    `}
`;

const ThemedInput = (props) => {
  const { xSmall, small, medium } = props;
  return (
    <InputContainer xSmall={xSmall} small={small} medium={medium}>
      <DefaultInput {...props} name="checker" component="input" />
    </InputContainer>
  );
};

ThemedInput.defaultProps = {
  xSmall: false,
  small: false,
  medium: true,
};

ThemedInput.propsTypes = {
  xSmall: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

export default ThemedInput;
