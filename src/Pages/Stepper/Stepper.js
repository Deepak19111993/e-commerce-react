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
  const [data, setData] = useState([...dotData]);
  const [stepperForm, setStepperForm] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [successfull, setSuccessfull] = useState(false);
  const [myData, setMyData] = useState({});
  // const [valueData, setValueData] = useState({
  //   first: { firstname: "", lastname: "", lastssname: "", firstssname: "" },
  //   second: { ffirstname: "", flastname: "" },
  // });
  // const [error, setError] = useState({});

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

  const handleArrow = (button) => {
    console.log("button", button);

    if (button === "right") {
      setStepperForm(stepperForm + 1);
      let newData = data.map((e, i) => {
        if (i < stepperForm + 1) {
          return { ...e, complete: true };
        } else {
          return { ...e, complete: false };
        }
      });
      setData(newData);
    } else {
      setStepperForm(stepperForm - 1);
      let newData = data.map((e, i) => {
        if (i < stepperForm - 1) {
          return { ...e, complete: true };
        } else {
          return { ...e, complete: false };
        }
      });
      setData(newData);
    }
  };

  // console.log("myData", myData);
  // console.log("vaueData", valueData);
  // console.log("eeeeee", error);

  return (
    <div className="stepperWrapper">
      {!successfull && (
        <div className="stepperIndicator">
          {data.map((value, index) => (
            <div
              key={index}
              className={`dot ${value?.complete === true ? "fill" : ""}`}
              onClick={() => hancleClick(index)}
            ></div>
          ))}
        </div>
      )}
      {!successfull && (
        <div className="stepperContent">
          {data.map((d, i) => {
            if (i === stepperForm) {
              let MainComp = d.comp;
              return (
                <div className="stepperFormWrapper" key={i}>
                  <MainComp
                    data={data}
                    setData={setData}
                    stepperForm={stepperForm}
                    setStepperForm={setStepperForm}
                    setMaxStep={setMaxStep}
                    maxStep={maxStep}
                    // handleMyData={(x) => setMyData({ ...myData, ...x })}
                    myData={myData}
                    setMyData={setMyData}
                    setSuccessfull={setSuccessfull}
                    className="show"
                    // valueData={valueData}
                    // setValueData={setValueData}
                    // error={error}
                    // setError={setError}
                  />
                </div>
              );
            }
          })}
        </div>
      )}
      {!successfull && (
        <div className="nav-arrow">
          {stepperForm === 0 ? (
            ""
          ) : (
            <button
              className="left arrow"
              onClick={() => handleArrow("left")}
            ></button>
          )}
          {stepperForm === data.length - 1 ? (
            ""
          ) : (
            <button
              className="right arrow"
              onClick={() => handleArrow("right")}
            ></button>
          )}
        </div>
      )}
      {successfull && (
        <div className="success">Successfully Form Submited!</div>
      )}
    </div>
  );
};

export default Stepper;
