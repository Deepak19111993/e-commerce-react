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

const Stepper = () => {
  const [data, setData] = useState(dotData);
  const [stepperForm, setStepperForm] = useState(0);
  const [maxStep, setMaxStep] = useState(0);

  // const hancleClick = (id) => {
  //   setStepperId(id);
  //   const newData = data.map((e, i) => {
  //     if (id - 1 >= i) {
  //       if (id > maxStep) {
  //         setStepperForm(maxStep);
  //         return { ...e, complete: false };
  //       } else {
  //         return { ...e, complete: true };
  //       }
  //     } else {
  //       setStepperForm(id);
  //       console.log("else", id, maxStep);
  //       return { ...e, complete: false };
  //     }
  //   });
  //   setData(newData);
  // };

  const hancleClick = (id) => {
    if (id - 1 >= maxStep) {
      setStepperForm(maxStep);
      let newData = data.map((e, i) => {
        if (i < maxStep) {
          return { ...e, complete: true };
        } else {
          return { ...e, complete: false };
        }
      });
      setData(newData);
    } else {
      setStepperForm(id);
      let newData = data.map((e, i) => {
        if (i < id) {
          return { ...e, complete: true };
        } else {
          return { ...e, complete: false };
        }
      });
      setData(newData);
    }
  };

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
        {/* {stepperForm === 0 && <FirstStepperForm  />}
        {stepperForm === 1 && <SecondStepperForm />}
        {stepperForm === 2 && <ThirdStepperForm />}
        {stepperForm === 3 && <FourthStepperForm />} */}
        {data.map((d, i) => {
          if (i === stepperForm) {
            return (
              <div className="stepperFormWrapper">
                <d.comp
                  data={data}
                  setData={setData}
                  setStepperForm={setStepperForm}
                  setMaxStep={setMaxStep}
                  maxStep={maxStep}
                />
              </div>
            );
          }
          // else {
          //   return "hello";
          // }
        })}
      </div>
    </div>
  );
};

export default Stepper;
