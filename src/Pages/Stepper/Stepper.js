import React, { useState } from "react";
import FirstStepperForm from "../../Components/FirstStepperForm/FirstStepperForm";
import FourthStepperForm from "../../Components/FourthStepperForm/FourthStepperForm";
import SecondStepperForm from "../../Components/SecondStepperForm/SecondStepperForm";
import ThirdStepperForm from "../../Components/ThirdStepperForm/ThirdStepperForm";
import "./Stepper.scss";

const dotData = [
  {
    id: 1,
    name: "stepper1",
    comp: FirstStepperForm,
  },
  {
    id: 2,
    name: "stepper2",
    comp: SecondStepperForm,
  },
  {
    id: 3,
    name: "stepper3",
    comp: ThirdStepperForm,
  },
  {
    id: 4,
    name: "stepper4",
    comp: FourthStepperForm,
  },
];

// console.log("dotData", dotData);

const Stepper = () => {
  const [data, setData] = useState(dotData);
  const [stepperForm, setStepperForm] = useState(0);

  const hancleClick = (id) => {
    setStepperForm(id);

    const newData = data.map((e, i) => {
      if (id - 1 >= i) {
        return { ...e, complete: true };
      } else {
        return { ...e, complete: false };
      }
    });

    setData(newData);
  };

  console.log(stepperForm);

  return (
    <div className="stepperWrapper">
      <div className="stepperIndicator">
        {data.map((value, index) => (
          <div
            className={`dot ${value?.complete === true ? "fill" : ""}`}
            onClick={() => hancleClick(index)}
          ></div>
        ))}
      </div>
      <div className="stepperContent">
        {data.map((d, i) => {
          if (i === stepperForm) {
            const MainComp = d.comp;
            return (
              <div className="stepperFormWrapper">
                <MainComp
                  data={data}
                  setData={setData}
                  setStepperForm={setStepperForm}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Stepper;
