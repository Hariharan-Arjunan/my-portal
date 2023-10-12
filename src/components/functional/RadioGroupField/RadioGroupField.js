import React from "react";
import FormField from "../../ui/FormField/FormField";
import ThemedRadioGroupInput from "../../ui/ThemedRadioGroupInput/ThemedRadioGroupInput";
import { Field } from "react-final-form";

const RadioGroupField = (props) => {
  const { name, schema, options } = props;

  return (
    <>
      <Field
        name={name}
        type="input"
        // validate={(values) => {
        //   const { error } = schema[name].validate({ [name]: values });

        //   if (error) return error;

        //   return {};
        // }}
      >
        {({ input, meta }) => {
          // const errorMessage =
          //   meta?.error?.details && meta.touched
          //     ? meta.error?.details[0]?.message
          //     : undefined;
          return (
            <>
              <FormField
                title="This is sample question"
                name={name}
                // errorMessage={errorMessage}
              >
                <ThemedRadioGroupInput {...input} options={options} />
              </FormField>
            </>
          );
        }}
      </Field>
    </>
  );
};

export default RadioGroupField;
