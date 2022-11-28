import React from "react";
import "./ThirdStepperForm.scss";

const ThirdStepperForm = ({
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
    maxStep < 3 && setMaxStep(3);
    setData(newData);
    setStepperForm(3);
  };
  return (
    <div className="thirdStepperForm">
      <div>
        <button onClick={continueClick}>continue step 3</button>
      </div>
    </div>
  );
};

export default ThirdStepperForm;
