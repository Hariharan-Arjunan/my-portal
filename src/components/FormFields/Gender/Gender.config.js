const GenderProps = {
  title: "May I ask your pronouns?",
  name: "gender",
  options: [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ],
};

const GenderSchemaConfig = {
  default: {
    GENERAL_USER: {
      ...GenderProps,
    },
  },
};

export default GenderSchemaConfig;
