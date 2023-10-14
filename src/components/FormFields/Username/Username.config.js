const UsernameProps = {
  title: "Can I know your sweet name?",
  name: "username",
  options: [],
};

const UsernameSchemaConfig = {
  default: {
    GENERAL_USER: {
      ...UsernameProps,
    },
  },
};

export default UsernameSchemaConfig;
