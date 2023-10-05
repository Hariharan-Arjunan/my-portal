import React from "react";
import FormField from "../../ui/FormField/FormField";
import ThemedDropdown from "../../ui/ThemedDropdown/ThemedDropdown";
import { Field } from "react-final-form";

const DropdownField = (props) => {
  const { name, schema, options } = props;
  return (
    <div>
      <Field
        name={name}
        // validate={(values) => {
        //   const { error } = schema[name].validate({ [name]: values });

        //   if (error) return error;

        //   return {};
        // }}
      >
        {({ input, meta }) => {
          const errorMessage =
            meta.error?.details && meta.touched
              ? meta.error?.details[0]?.message
              : undefined;
          return (
            <>
              <FormField
                title="This is sample question"
                errorMessage={errorMessage}
              >
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
