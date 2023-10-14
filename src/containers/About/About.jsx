import React from "react";
import styled from "styled-components";
import { images } from "../../constants";

const ThemedContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: ${(props) => props.theme.indigoDark} 2px solid;
`;

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledConatiner = styled.div`
  margin: 10px;
`;

const StyledImage = styled.img`
  width: 190px;
  height: 190px;
  object-fit: cover;
`;

const StyledSubHeading = styled.h2`
  margin: 10px 0;
`;

const StyledParagraph = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  border-bottom: double;
`;

const StyledWrapper = styled.div`
  border-bottom: double;
`;
const StyledList = styled.li``;

const Packages = [
  "Form --> react-final-form",
  "Validation --> joi",
  "Design --> styled-components",
  "Icons --> react-icons",
  "Props --> prop-types",
];

const Details = [
  {
    title: "Source",
    description: `There are 9 segments available in my source folder. The main thing is component section, 
      its mainly divided into 2 types called functionl and ui components. 
      The form is available in the containers folder and view section is provided in pages folder`,
    image: images.Src,
  },
  {
    title: "Ui Components",
    description: `Every component is designed using styled-components, in which we can easily change color based up on the color palette. 
    Eg: Buttons, Inputs, Dropdowns, etc.,
    `,
    image: images.UiCmp,
  },
  {
    title: "Functional Components",
    description: `As name said the component performs some operation. Eg: This contains UI Compnent as a one child and performs validation`,
    image: images.FunctionalCmp,
  },
  {
    title: "Form Fields",
    description: `Each and every question used in from should be created as a component here. And its title, options 
    can be easily changes based upon user/access type in config.js file`,
    image: images.FormFields,
  },
  {
    title: "Form",
    description: `The form structure will be fully dynamic. We can easily perform operations like changing the question orders, 
    validation message for each question, add or remove questions`,
    image: images.Form,
  },
];

const About = () => {
  return (
    <ThemedContainer>
      <StyledTitle>About this Portal</StyledTitle>
      <StyledConatiner>
        <StyledSubHeading>Packages Used</StyledSubHeading>
        <StyledWrapper>
          {Packages.map((data) => {
            return <StyledList>{data}</StyledList>;
          })}
        </StyledWrapper>
      </StyledConatiner>
      <StyledConatiner>
        {Details.map((data) => {
          return (
            <>
              <StyledSubHeading>{data.title}</StyledSubHeading>
              <StyledImage src={data.image} />
              <StyledParagraph>{data.description}</StyledParagraph>
            </>
          );
        })}
      </StyledConatiner>
    </ThemedContainer>
  );
};

export default About;
