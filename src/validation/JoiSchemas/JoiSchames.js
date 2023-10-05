import Joi from "joi";

const DEFAULT_MESSAGE = "Please enter a valid value";

const stringRequired = (key, message = DEFAULT_MESSAGE) => {
  return Joi.object({
    [key]: Joi.string().required().messages({ "any.required": message }),
  });
};

export { stringRequired };
