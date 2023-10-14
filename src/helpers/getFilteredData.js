const getFilteredData = (input, brandCode, type) => {
  const data = input;

  if (!Object.keys(input).includes(brandCode)) {
    data[brandCode] = input.default;
  }
  if (type) {
    return data[brandCode][type];
  }

  return data[brandCode];
};

export default getFilteredData;
