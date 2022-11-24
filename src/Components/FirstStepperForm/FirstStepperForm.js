import React from "react";
import "./FirstStepperForm.scss";

const FirstStepperForm = ({ data, setData, setStepperForm }) => {
  const continueClick = () => {
    const newData = data.map((e, i) => {
      if (i === 0) {
        return { ...e, complete: true };
      } else {
        return { ...e, complete: false };
      }
    });

    setData(newData);
    setStepperForm(1);
  };
  return (
    <div className="firstStepperForm">
      <div>
        <button onClick={continueClick}>continue</button>
      </div>
    </div>
  );
};

export default FirstStepperForm;
