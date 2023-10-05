import React from "react";
import ThemedPanel from "../../components/ui/ThemedPanel/ThemedPanel";
import RadioGroupField from "../../components/functional/RadioGroupField/RadioGroupField";
import { Form } from "react-final-form";
import TextInputField from "../../components/functional/TextInputField/TextInputField";
import CrudFormSchema from "../../validation/CrudForm/CrudSchema";
import DropdownField from "../../components/functional/DropdownField/DropdownField";

const buttonOptions = [
  { label: "One", value: "one" },
  { label: "Two", value: "two" },
  { label: "Three", value: "three" },
  { label: "Four", value: "four" },
];

const formSubmit = (values) => {
  // e.preventDefault();
  console.log(values);
};

const Crud = () => {
  return (
    <>
      <ThemedPanel title="CRUD Form" primary>
        <Form
          onSubmit={formSubmit}
          render={({ handleSubmit, form, values, valid }) => {
            return (
              <form onSubmit={handleSubmit}>
                {/* <RadioGroupField
                  name="sample"
                  fieldName="sample"
                  buttonOptions={buttonOptions}
                /> */}
                <TextInputField
                  name="username"
                  schema={CrudFormSchema.default}
                />

                <RadioGroupField
                  name="gender"
                  schema={CrudFormSchema.schema}
                  options={[
                    { label: "Male", value: "M" },
                    { label: "Female", value: "F" },
                  ]}
                />
                <DropdownField
                  name="age"
                  schema={CrudFormSchema.schema}
                  options={[
                    { label: "18", value: "18" },
                    { label: "19", value: "19" },
                  ]}
                />
                <button type="submit">Submit</button>
              </form>
            );
          }}
        />
      </ThemedPanel>
    </>
  );
};

export default Crud;
