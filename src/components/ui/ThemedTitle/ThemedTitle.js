import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledTitle = styled.h1`
  padding: 20px;
  font-weight: normal;
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  ${(props) =>
    props.primary &&
    css`
      color: ${props.theme.primary};
    `}
`;

const ThemedTitle = (props) => {
  const { children } = props;
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

ThemedTitle.propTypes = {
  textAlign: PropTypes.string,
  margin: PropTypes.string,
};

ThemedTitle.defaultProps = {
  textAlign: "center",
  margin: undefined,
};

export default ThemedTitle;
