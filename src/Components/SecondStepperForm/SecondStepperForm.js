import React from "react";
import "./SecondStepperForm.scss";

const SecondStepperForm = ({
  data,
  setData,
  setStepperForm,
  setMaxStep,
  maxStep,
}) => {
  const continueClick = () => {
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
  };
  return (
    <div className="secondStepperForm">
      <div>
        <button onClick={continueClick}>continue step 2</button>
      </div>
    </div>
  );
};

export default SecondStepperForm;
