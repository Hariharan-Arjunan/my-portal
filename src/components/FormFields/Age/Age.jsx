import React from "react";
import AgeSchemaConfig from "./Age.config";
import DropdownField from "../../Functional/DropdownField/DropdownField";
import getFilteredData from "../../../helpers/getFilteredData";
import { BRAND, CUSTOMER_TYPE } from "../../../constants";

const Age = ({ schema }) => {
  const details = getFilteredData(
    AgeSchemaConfig,
    BRAND.normal,
    CUSTOMER_TYPE.general
  );

  return (
    <DropdownField
      name={details.name}
      title={details.title}
      schema={schema}
      options={details.options}
    />
  );
};

export default Age;
