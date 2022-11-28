import React from "react";
import "./FourthStepperForm.scss";

const FourthStepperForm = ({
  data,
  setData,
  setStepperForm,
  setMaxStep,
  maxStep,
}) => {
  const continueClick = () => {
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
  };
  return (
    <div className="fourthStepperForm">
      <div>
        <button onClick={continueClick}>Submit</button>
      </div>
    </div>
  );
};

export default FourthStepperForm;
