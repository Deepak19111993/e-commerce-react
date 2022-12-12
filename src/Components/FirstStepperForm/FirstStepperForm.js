import React, { useEffect, useState } from "react";
import "./FirstStepperForm.scss";
import ValidationError from "../ValidationError";

const FirstStepperForm = ({
  data,
  setData,
  setStepperForm,
  setMaxStep,
  maxStep,
  setMyData,
  myData,
  className,
  stepperForm,
  // valueData,
  // setValueData,
  // error,
  // setError,
}) => {
  const [valueData, setValueData] = useState({
    firstname: "",
    lastname: "",
    lastssname: "",
    firstssname: "",
  });
  const [error, setError] = useState({});

  const continueClick = (e) => {
    e.preventDefault();

    const newValidation = ValidationError(valueData, "step1");

    // console.log("newValidation", newValidation);

    if (!Object?.keys(newValidation)?.length) {
      setMyData({
        ...myData,
        first: {
          ...myData.first,
          // [e.target.name]: e.target.value,
          ...valueData,
        },
      });
      const newData = data.map((e, i) => {
        if (i === 0) {
          return { ...e, complete: true };
        } else {
          return { ...e, complete: false };
        }
      });
      maxStep < 1 && setMaxStep(1);
      setData(newData);
      setStepperForm(1);
      setError({});
    } else {
      console.log("svbshjbv", newValidation);
      setError(newValidation);
    }
  };

  const handleChange = (e) => {
    setValueData({
      ...valueData,
      [e.target.name]: e.target.value,
    });
    // const newValidation = ValidationError(valueData, "step1");
    // setError(newValidation);
  };

  useEffect(() => {
    if (myData.first) {
      setValueData({
        ...myData.first,
      });
    }
  }, []);

  return (
    <div className={`firstStepperForm ${stepperForm === 0 ? className : null}`}>
      <form>
        <div
          className={`form-item width100 ${error?.firstname ? "error" : ""}`}
        >
          <label>First Name</label>
          <input
            value={valueData?.firstname}
            name="firstname"
            placeholder="Please Enter Name"
            onChange={(e) => handleChange(e)}
          />
          {error.firstname && (
            <span className="error-text">{error.firstname}</span>
          )}
        </div>
        <div className={`form-item width100 ${error?.lastname ? "error" : ""}`}>
          <label>Last Name</label>
          <input
            value={valueData?.lastname}
            name="lastname"
            placeholder="Please Enter Name"
            onChange={(e) => handleChange(e)}
          />
          {error.lastname && (
            <span className="error-text">{error.lastname}</span>
          )}
        </div>
        <div
          className={`form-item width100 ${error?.firstssname ? "error" : ""}`}
        >
          <label>First ss Name</label>
          <input
            value={valueData.firstssname}
            name="firstssname"
            placeholder="Please Enter Name"
            onChange={(e) => handleChange(e)}
          />
          {error.firstssname && (
            <span className="error-text">{error.firstssname}</span>
          )}
        </div>
        <div
          className={`form-item width100 ${error?.lastssname ? "error" : ""}`}
        >
          <label>Last ss Name</label>
          <input
            value={valueData.lastssname}
            name="lastssname"
            placeholder="Please Enter Name"
            onChange={(e) => handleChange(e)}
          />
          {error.lastssname && (
            <span className="error-text">{error.lastssname}</span>
          )}
        </div>
        <button type="submit" onClick={continueClick}>
          continue
        </button>
      </form>
    </div>
  );
};

export default FirstStepperForm;
