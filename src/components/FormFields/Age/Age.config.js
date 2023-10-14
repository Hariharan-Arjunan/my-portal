const AgeProps = {
  title: "You look so youthful! Can I know your age?",
  name: "age",
  options: [
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
  ],
};

const AgeSchemaConfig = {
  default: {
    GENERAL_USER: {
      ...AgeProps,
    },
  },
};

export default AgeSchemaConfig;
