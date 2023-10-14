import React from "react";
import styled from "styled-components";
import ThemedTitle from "../../components/Ui/ThemedTitle/ThemedTitle";

const ThemedHeader = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.header};
`;

const Header = () => {
  return (
    <ThemedHeader>
      <ThemedTitle primary>Welcome To My Portal</ThemedTitle>
    </ThemedHeader>
  );
};

export default Header;
