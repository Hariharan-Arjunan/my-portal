import React from "react";
import { Field } from "react-final-form";
import FormField from "../../ui/FormField/FormField";
import ThemedInput from "../../ui/ThemedInput/ThemedInput";

const TextInputField = (props) => {
  const { name, schema } = props;
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
              <FormField
                title="This is sample question"
                errorMessage={errorMessage}
              >
                <ThemedInput {...input} />
              </FormField>
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default TextInputField;
