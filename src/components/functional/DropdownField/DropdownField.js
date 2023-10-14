import React from "react";
import FormField from "../../Ui/FormField/FormField";
import ThemedDropdown from "../../Ui/ThemedDropdown/ThemedDropdown";
import { Field } from "react-final-form";

const DropdownField = (props) => {
  const { name, title, schema, options } = props;
  return (
    <div>
      <Field
        name={name}
        validate={(values) => {
          const { error } = schema[name].validate({ [name]: values });
          if (error) return error;
          return {};
        }}
      >
        {({ input, meta }) => {
          const errorMessage =
            meta.error?.details && meta.touched
              ? meta.error?.details[0]?.message
              : undefined;
          return (
            <>
              <FormField title={title} errorMessage={errorMessage}>
                <ThemedDropdown {...input} options={options} />
              </FormField>
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default DropdownField;
