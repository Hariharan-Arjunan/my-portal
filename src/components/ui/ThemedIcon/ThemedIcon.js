import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

const ThemedIcon = (props) => {
  const { icon, color, size } = props;
  const IconsSet = {
    helpRoundel: <BsQuestionCircle color={color} size={size} />,
  };
  return <>{IconsSet[icon]}</>;
};

export default ThemedIcon;
