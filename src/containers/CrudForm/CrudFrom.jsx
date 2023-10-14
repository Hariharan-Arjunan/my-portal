import React from "react";
import { Form } from "react-final-form";
import styled from "styled-components";
import ThemedPanel from "../../components/Ui/ThemedPanel/ThemedPanel";
import CrudFormSchema from "../../validation/CrudForm/CrudSchema";
import ThemedButton from "../../components/Ui/ThemedButton/ThemedButton";
import getFilteredData from "../../helpers/getFilteredData";
import getComponents from "../../helpers/getComponents";
import { Username, Age, Gender } from "../../components/FormFields";
import { BRAND } from "../../constants";

const StyledPre = styled.pre`
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const CrudForm = () => {
  const formSubmit = (values) => {
    //Submitted Values
  };

  const validation = getFilteredData(CrudFormSchema, BRAND.normal);

  const questions = {
    name: <Username schema={validation} />,
    age: <Age schema={validation} />,
    gender: <Gender schema={validation} />,
  };

  const questionOrder = {
    default: [questions.name, questions.gender, questions.age],
  };

  return (
    <>
      <ThemedPanel title="CRUD Form" primary>
        <Form
          onSubmit={formSubmit}
          render={({ handleSubmit, form, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                {getComponents(questionOrder, BRAND.normal)}
                <ThemedButton type="submit">Submit</ThemedButton>
                <ThemedButton onClick={form.reset}>Reset</ThemedButton>
                <StyledPre>{JSON.stringify(values, 0, 2)}</StyledPre>
              </form>
            );
          }}
        />
      </ThemedPanel>
    </>
  );
};

export default CrudForm;
