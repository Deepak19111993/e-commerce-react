import React, { useEffect, useState } from "react";
import ValidationError from "../ValidationError";
import "./FourthStepperForm.scss";

const FourthStepperForm = ({
  data,
  setData,
  setStepperForm,
  setMaxStep,
  maxStep,
  setSuccessfull,
  setMyData,
  myData,
  stepperForm,
  className,
}) => {
  const [valueData, setValueData] = useState({ region: "" });
  const [error, setError] = useState({});
  const continueClick = (evt) => {
    evt.preventDefault();

    const newValidation = ValidationError(valueData, "step4");

    // let err = error;

    // if (valueData?.region) {
    //   if (valueData?.region?.length < 4) {
    //     err.region = "length should be more than 3 letter!";
    //   } else {
    //     delete err.region;
    //   }
    // } else {
    //   err.region = "Please fill the field!";
    // }

    if (!Object?.keys(newValidation)?.length) {
      setMyData({
        ...myData,
        fourth: {
          ...myData.fourth,
          // [e.target.name]: e.target.value,
          ...valueData,
        },
      });
      const newData = data.map((e, i) => {
        if (i <= 2) {
          return { ...e, complete: true };
        } else {
          return { ...e, complete: false };
        }
      });
      maxStep < 4 && setMaxStep(4);
      setData(newData);
      setStepperForm(4);
      setSuccessfull(true);
      setError({});
    } else {
      setError(newValidation);
    }
  };
  const handleChange = (e) => {
    setValueData({ ...valueData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (myData.fourth) {
      setValueData({
        ...myData.fourth,
      });
    }
  }, []);

  return (
    <div
      className={`fourthStepperForm ${stepperForm === 3 ? className : null}`}
    >
      <form>
        <div className={`form-item width100 ${error?.region ? "error" : ""}`}>
          <label>Region</label>
          <input
            value={valueData.region}
            name="region"
            placeholder="Please Enter Region"
            onChange={handleChange}
          />
          {error.region && <span className="error-text">{error.region}</span>}
        </div>
        <button type="submit" onClick={continueClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FourthStepperForm;
