import React, { useEffect, useState } from "react";
import { Alert, DatePicker } from "antd";
import { isEmpty } from "lodash";
import "./Slot.scss";
import moment from "moment";

const { RangePicker } = DatePicker;

const Slot = () => {
  const [slotObj, setSlotObj] = useState({});
  const [slotArray, setSlotArray] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    console.log(value);
    console.log("AFTER", value[0].isAfter(value[1]));
    console.log("BEFORE", value[0].isBefore(value[1]));
    console.log("SAME AFTER", value[0].isSameOrAfter(value[1]));
    console.log("PASKDPOA", value[0].day(), value[1].day());
    console.log(moment().range(value[0].day(), value[1].day()));

    // console.log(moment.duration(value[0].day().diff(value[1].day())).asDays());
    // setstartdateRange(value[0].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(","));
    // setEnddateRange(value[1].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(","));

    setSlotObj({
      start: {
        day: value[0].format("ddd"),
        date: value[0].format("MMMM Do YYYY"),
        time: value[0].format("h:mm:ss"),
        ast: value[0].format("A"),
      },
      end: {
        day: value[1].format("ddd"),
        date: value[1].format("MMMM Do YYYY"),
        time: value[1].format("h:mm:ss"),
        ast: value[1].format("A"),
      },
    });
  };

  useEffect(() => {
    // Object.values(slotObj).length > 0 && setSlotArray([...slotArray, slotObj]);
    // !isEmpty(slotObj) && setSlotArray([...slotArray, slotObj]);

    if (
      slotArray.map((e, i) => e?.start?.day).includes(slotObj?.start?.day) ||
      slotArray.map((e, i) => e?.end?.day).includes(slotObj?.end?.day)
    ) {
      !isEmpty(slotObj) && setSlotArray([...slotArray]);
      setError(true);
    } else {
      !isEmpty(slotObj) && setSlotArray([...slotArray, slotObj]);
      setError(false);
    }
  }, [slotObj]);

  console.log("slotObj", slotObj);
  console.log("slotArray", slotArray);
  console.log(
    slotArray.map((e, i) => e?.start?.day).includes(slotObj?.start?.day)
  );
  console.log(slotArray.map((e, i) => e?.start?.day));
  console.log(slotObj?.start?.day);
  console.log(
    slotArray
      .map((e, i) => i !== slotArray.length - 1 && e?.start?.day)
      .includes(slotObj?.start?.day)
  );

  //   const update = () => {
  //     return (
  //       <>
  //         {slotArray
  //           .map((e, i) => e?.start?.day)
  //           .includes(slotObj?.start?.day) && (
  //           <span
  //             style={{
  //               color: "#000",
  //               textDecoration: "underline",
  //               margin: "0 10px 0",
  //             }}
  //           >
  //             {slotObj?.start?.day}
  //           </span>
  //         )}
  //         {slotArray.map((e, i) => e?.end?.day).includes(slotObj?.end?.day) && (
  //           <span>and</span>
  //         )}
  //         {slotArray.map((e, i) => e?.end?.day).includes(slotObj?.end?.day) && (
  //           <span
  //             style={{
  //               color: "#000",
  //               textDecoration: "underline",
  //               margin: "0 10px 0",
  //             }}
  //           >
  //             {slotObj?.end?.day}
  //           </span>
  //         )}
  //       </>
  //     );
  //   };

  return (
    <div>
      <form>
        <div className="input-field">
          <div className="float-label">
            <RangePicker
              showTime
              showToday
              onChange={(e) => handleChange(e)}
              format={"ddd, MMMM Do YYYY, h:mm:ss A"}
            />
          </div>
        </div>
      </form>

      {error && (
        <p
          style={{
            textAlign: "center",
            color: "red",
            fontSize: "16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Alert
            message={
              <div style={{ color: "red" }}>
                {slotArray
                  .map((e, i) => e?.start?.day)
                  .includes(slotObj?.start?.day) && (
                  <span
                    style={{
                      color: "#000",
                      textDecoration: "underline",
                      margin: "0 5px 0",
                      fontWeight: "600",
                    }}
                  >
                    {slotObj?.start?.day}
                  </span>
                )}{" "}
                {slotArray
                  .map((e, i) => e?.end?.day)
                  .includes(slotObj?.end?.day) && <span>and</span>}{" "}
                {slotArray
                  .map((e, i) => e?.end?.day)
                  .includes(slotObj?.end?.day) && (
                  <span
                    style={{
                      color: "#000",
                      textDecoration: "underline",
                      margin: "0 5px 0",
                      fontWeight: "600",
                    }}
                  >
                    {slotObj?.end?.day}
                  </span>
                )}{" "}
                is already booked! Please Select another day!
              </div>
            }
            type="error"
            closable
            // onClose={onClose}
          />
        </p>
      )}

      {!isEmpty(slotObj) && (
        <div className="arrBlock">
          <div className="leftBlock">
            <div className="title">Start week</div>
            {slotArray.map((e, i) => (
              <div className="objBlock">
                <div>
                  <span>Day</span> <span>{e.start.day}</span>
                </div>
                <div>
                  <span>Date</span> <span>{e.start.date}</span>
                </div>
                <div>
                  <span>Time</span> <span>{e.start.time}</span>
                </div>
                <div>
                  <span>Ast</span> <span>{e.start.ast}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rightBlock">
            <div className="title">End week</div>
            {slotArray.map((e, i) => (
              <div className="objBlock">
                <div>
                  <span>Day</span> <span>{e.end.day}</span>
                </div>
                <div>
                  <span>Date</span> <span>{e.end.date}</span>
                </div>
                <div>
                  <span>Time</span> <span>{e.end.time}</span>
                </div>
                <div>
                  <span>Ast</span> <span>{e.end.ast}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slot;
