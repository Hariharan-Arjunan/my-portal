import { stringRequired } from "../JoiSchemas/JoiSchames";

const CrudFormSchema = {
  // BRAND NAME (For multi purpose portal)
  default: {
    username: stringRequired("username", "Please enter your name"),
    gender: stringRequired("gender", "Please select your gender"),
    age: stringRequired("age", "Please select your age"),
  },
};

export default CrudFormSchema;
