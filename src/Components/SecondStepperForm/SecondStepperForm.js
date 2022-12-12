import React, { useEffect, useState } from "react";
import ValidationError from "../ValidationError";
import "./SecondStepperForm.scss";

const SecondStepperForm = ({
  data,
  setData,
  setStepperForm,
  setMaxStep,
  maxStep,
  setMyData,
  myData,
  stepperForm,
  className,
  // valueData,
  // setValueData,
  // error,
  // setError,
}) => {
  const [valueData, setValueData] = useState({ ffirstname: "", flastname: "" });
  const [error, setError] = useState({});
  const continueClick = (evt) => {
    evt.preventDefault();

    const newValidation = ValidationError(valueData, "step2");

    if (!Object?.keys(newValidation)?.length) {
      setMyData({
        ...myData,
        second: {
          ...myData.second,
          // [e.target.name]: e.target.value,
          ...valueData,
        },
      });
      const newData = data.map((e, i) => {
        if (i <= 1) {
          return { ...e, complete: true };
        } else {
          return { ...e, complete: false };
        }
      });
      maxStep < 2 && setMaxStep(2);
      setData(newData);
      setStepperForm(2);
      setError({});
    } else {
      setError(newValidation);
    }
  };
  const handleChange = (e) => {
    setValueData({ ...valueData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (myData.second) {
      setValueData({
        ...myData.second,
      });
    }
  }, []);

  return (
    <div
      className={`secondStepperForm ${stepperForm === 1 ? className : null}`}
    >
      <form>
        <div
          className={`form-item width100 ${error?.ffirstname ? "error" : ""}`}
        >
          <label>Father First Name</label>
          <input
            value={valueData?.ffirstname}
            name="ffirstname"
            placeholder="Please Enter Name"
            onChange={handleChange}
          />
          {error.ffirstname && (
            <span className="error-text">{error.ffirstname}</span>
          )}
        </div>
        <div
          className={`form-item width100 ${error?.flastname ? "error" : ""}`}
        >
          <label>Father Last Name</label>
          <input
            value={valueData?.flastname}
            name="flastname"
            placeholder="Please Enter Name"
            onChange={handleChange}
          />
          {error.flastname && (
            <span className="error-text">{error.flastname}</span>
          )}
        </div>
        <button type="submit" onClick={continueClick}>
          continue
        </button>
      </form>
    </div>
  );
};

export default SecondStepperForm;
