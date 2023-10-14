import React from "react";
import { Field } from "react-final-form";
import FormField from "../../Ui/FormField/FormField";
import ThemedInput from "../../Ui/ThemedInput/ThemedInput";

const TextInputField = (props) => {
  const { name, title, schema } = props;
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
