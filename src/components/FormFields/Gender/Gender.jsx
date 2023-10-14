import React from "react";
import GenderSchemaConfig from "./Gender.config";
import getFilteredData from "../../../helpers/getFilteredData";
import RadioGroupField from "../../Functional/RadioGroupField/RadioGroupField";
import { BRAND, CUSTOMER_TYPE } from "../../../constants";

const Gender = ({ schema }) => {
  const details = getFilteredData(
    GenderSchemaConfig,
    BRAND.normal,
    CUSTOMER_TYPE.general
  );

  return (
    <RadioGroupField
      name={details.name}
      title={details.title}
      schema={schema}
      options={details.options}
    />
  );
};

export default Gender;
