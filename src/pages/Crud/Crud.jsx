import React from "react";
import ThemedPanel from "../../components/ui/ThemedPanel/ThemedPanel";
import FormField from "../../components/ui/FormField/FormField";

const Crud = () => {
  return (
    <>
      <ThemedPanel title="CRUD Form" primary>
        <FormField
          title=" This is the sample label content?"
          errorMessages="hai"
        >
          <input />
        </FormField>
      </ThemedPanel>
    </>
  );
};

export default Crud;
