const ValidationError = (valueData, step) => {
  let err = {};

  console.log(valueData);

  const fieldValidation = (key) => {
    if (valueData[key].length < 4) {
      err[key] = "length should be more than 3 letter!";
    } else {
      delete err[key];
    }
  };

  Object.keys(valueData).forEach((key) => {
    // console.log("check", key, valueData[key]);
    if (valueData[key]) {
      fieldValidation(key);
    } else {
      err[key] = "Please fill the field!";
    }
  });

  console.log(err);

  return err;
};

export default ValidationError;
