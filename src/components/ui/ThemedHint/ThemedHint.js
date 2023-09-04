import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import ThemedIcon from "../ThemedIcon/ThemedIcon";

const HelpContainer = styled.div``;

const HintTrigger = styled.span`
  /* background: none;
  border: none;
  width: 26px;
  height: 26px;
  padding: 0;
  line-height: 0;
  cursor: pointer;
  display: inline-block;
  transition: background 0.2s linear, transform 0.2s linear;
  will-change: transform;
  vertical-align: middle; */
`;

const ThemedHint = (props) => {
  const { children, color, size, hover, noclick } = props;
  const [isHintVisible, toggleHintVisibility] = useState(false);

  const toggleHintBox = (e) => {
    e.preventDefault();
    toggleHintVisibility(!isHintVisible);
  };

  const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleHintVisibility(false);
  });

  return (
    <HelpContainer ref={ref}>
      <HintTrigger>
        <span>
          <ThemedIcon icon="helpRoundel" color={color} size={size} />
        </span>
      </HintTrigger>
      {children}
    </HelpContainer>
  );
};

export default ThemedHint;
