import React from "react";
import UsernameSchemaConfig from "./Username.config";
import getFilteredData from "../../../helpers/getFilteredData";
import TextInputField from "../../Functional/TextInputField/TextInputField";
import { BRAND, CUSTOMER_TYPE } from "../../../constants";

const Username = ({ schema }) => {
  const details = getFilteredData(
    UsernameSchemaConfig,
    BRAND.normal,
    CUSTOMER_TYPE.general
  );

  return (
    <TextInputField
      name={details.name}
      title={details.title}
      schema={schema}
      options={details.options}
    />
  );
};

export default Username;
