import React, { useEffect, useState } from "react";
import ValidationError from "../ValidationError";
import "./ThirdStepperForm.scss";

const ThirdStepperForm = ({
  data,
  setData,
  setStepperForm,
  setMaxStep,
  maxStep,
  setMyData,
  myData,
  stepperForm,
  className,
}) => {
  const [valueData, setValueData] = useState({ mfirstname: "", mlastname: "" });
  const [error, setError] = useState({});
  const continueClick = (evt) => {
    evt.preventDefault();

    const newValidation = ValidationError(valueData, "step3");

    if (!Object?.keys(newValidation)?.length) {
      setMyData({
        ...myData,
        third: {
          ...myData.third,
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
      maxStep < 3 && setMaxStep(3);
      setData(newData);
      setStepperForm(3);
      setError({});
    } else {
      setError(newValidation);
    }
  };
  const handleChange = (e) => {
    // setValue(e.target.value);
    // setName(e.target.name);
    setValueData({ ...valueData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (myData.third) {
      setValueData({
        ...myData.third,
      });
    }
  }, []);

  return (
    <div className={`thirdStepperForm ${stepperForm === 2 ? className : null}`}>
      <form>
        <div
          className={`form-item width100 ${error?.mfirstname ? "error" : ""}`}
        >
          <label>Mother First Name</label>
          <input
            value={valueData.mfirstname}
            name="mfirstname"
            placeholder="Please Enter Name"
            onChange={handleChange}
          />
          {error.mfirstname && (
            <span className="error-text">{error.mfirstname}</span>
          )}
        </div>
        <div
          className={`form-item width100 ${error?.mlastname ? "error" : ""}`}
        >
          <label>Mother Last Name</label>
          <input
            value={valueData.mlastname}
            name="mlastname"
            placeholder="Please Enter Name"
            onChange={handleChange}
          />
          {error.mlastname && (
            <span className="error-text">{error.mlastname}</span>
          )}
        </div>
        <button type="submit" onClick={continueClick}>
          continue
        </button>
      </form>
    </div>
  );
};

export default ThirdStepperForm;
