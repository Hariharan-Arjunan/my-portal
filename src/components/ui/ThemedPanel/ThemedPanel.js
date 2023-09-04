import React from "react";
import styled, { css } from "styled-components";

const PanelContainer = styled.div`
  width: 60%;
  height: auto;
  margin: 40px auto 20px;
  border: 1px solid;
  border-radius: 5px;
  border-color: ${(props) => props.theme.panelBorder};
  background-color: ${(props) => props.theme.panelBackground};
`;

const PanelTitle = styled.h2`
  text-align: center;
  height: auto;
  background-color: ${(props) => props.theme.panelTitleBackground};
  padding: 20px;
  ${(props) =>
    props.primary &&
    css`
      color: ${props.theme.primary};
    `}
`;

const PanelContent = styled.div`
  padding: 20px;
`;

const ThemedPanel = (props) => {
  const { children, title } = props;
  return (
    <PanelContainer>
      <PanelTitle {...props}>{title}</PanelTitle>
      <PanelContent>{children}</PanelContent>
    </PanelContainer>
  );
};

export default ThemedPanel;
