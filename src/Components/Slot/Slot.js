import React, { useEffect, useState } from "react";
import { Alert, DatePicker } from "antd";
import { isEmpty } from "lodash";
import "./Slot.scss";
import moment from "moment";
import { tuple } from "antd/es/_util/type";
// moment().isAfter(moment());
const { RangePicker } = DatePicker;

const Slot = () => {
  const [dateValue, setDateValue] = useState([]);
  const [slotObj, setSlotObj] = useState({});
  const [slotArray, setSlotArray] = useState([]);
  const [error, setError] = useState(false);
  const [firstDay, setFirstDay] = useState("");
  const [lastDay, setLastDay] = useState("");

  var arrValue = [0, 1, 2, 3, 4, 5, 6];

  var getIndArr = [];

  const handleChange = (value) => {
    console.log(value);
    setDateValue([value[0], value[1]]);

    // console.log("AFTER", value[0].isAfter(value[1]));
    // console.log("BEFORE", value[0].isBefore(value[1]));
    // console.log("SAME AFTER", value[0].isSameOrAfter(value[1]));
    // console.log("PASKDPOA", value[0].day(), value[1].day());

    // console.log("Hour", value[0].hour(), value[1].hour());
    // console.log("Minute", value[0].minute(), value[1].minute());
    // console.log("Second", value[0].second(), value[1].second());

    // console.log(moment.duration(value[0].day().diff(value[1].day())).asDays());
    // setstartdateRange(value[0].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(","));
    // setEnddateRange(value[1].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(","));

    var firstValue = value[0].day();
    var lastValue = value[1].day();

    var firstIn = arrValue.indexOf(firstValue);
    var lastIn = arrValue.indexOf(lastValue);

    // greater array EX: [5,6,0,1,2]
    if (firstIn > lastIn) {
      // greater array back value less 6 EX: [5,6]
      for (let i = firstIn; i < arrValue.length; i++) {
        console.log("Less", i);
        getIndArr.push(i);
        // greater array next value greater 6 with new array  EX: [0,1,2]
        if (i === arrValue.length - 1) {
          for (let i = 0; i <= lastIn; i++) {
            getIndArr.push(i);
          }
        }
      }
    } else {
      // greater array Equal to value EX: [1]
      if (firstIn === lastIn) {
        // if (firstIn === lastIn) {
        console.log("equal");
        for (let i = firstIn; i <= lastIn; i++) {
          getIndArr.push(i);
        }
      }
      // less array EX: [1 to 6]
      else {
        for (let i = firstIn; i <= lastIn; i++) {
          console.log("Less", i);
          getIndArr.push(i);
        }
      }
    }

    setSlotObj({
      start: {
        day: value[0].format("ddd"),
        date: value[0].format("MMMM Do YYYY"),
        time: value[0].format("HH:mm:ss"),
        index: firstIn,
        timeStamp: parseInt(value[0].format("X")),
      },
      end: {
        day: value[1].format("ddd"),
        date: value[1].format("MMMM Do YYYY"),
        time: value[1].format("HH:mm:ss"),
        index: lastIn,
        timeStamp: parseInt(value[1].format("X")),
      },
      dayIndex: getIndArr,
    });

    const getWeekDay = (weekNumber) => {
      switch (weekNumber) {
        case 0:
          console.log("Sun");
          return "Sun";
        case 1:
          console.log("Mon");
          return "Mon";
        case 2:
          console.log("Tue");
          return "Tue";
        case 3:
          console.log("Wed");
          return "Wed";
        case 4:
          console.log("Thu");
          return "Thu";
        case 5:
          console.log("Fri");
          return "Fri";
        case 6:
          console.log("Sat");
          return "Sat";
        default:
      }
    };

    setFirstDay(getWeekDay(firstValue));
    setLastDay(getWeekDay(lastValue));
    setDateValue([]);
  };

  useEffect(() => {
    if (slotArray.length === 0) {
      !isEmpty(slotObj) && setSlotArray([...slotArray, slotObj]);
    } else {
      // to close parent loop if close nested loop
      // first loop for get array length and loop
      let isValidSlot = true;
      for (let i = 0; i < slotArray.length; i++) {
        // second loop for get new value day and time length and object

        // console.log("asdds--", slotObj?.start?.timeStamp);
        if (
          (slotArray[i]?.start?.timeStamp < slotObj?.start?.timeStamp &&
            slotArray[i]?.end?.timeStamp > slotObj?.start?.timeStamp) ||
          (slotArray[i]?.start?.timeStamp < slotObj?.end?.timeStamp &&
            slotArray[i]?.end?.timeStamp > slotObj?.end?.timeStamp)
        ) {
          !isEmpty(slotObj) && setSlotArray([...slotArray]); //add exist array if true
          setError(true); // if value true show error
          isValidSlot = false;
          break; // stop loop
        }
      }
      if (isValidSlot) {
        !isEmpty(slotObj) && setSlotArray([...slotArray, slotObj]); // add new value in array if not true
        setError(false); // if value false hide error
      }
    }
  }, [slotObj]);

  console.log("slotObj", slotObj);
  console.log("slotArray", slotArray);
  return (
    <div>
      <form>
        <div className="input-field">
          <div className="float-label">
            <RangePicker
              defaultValue={[]}
              value={dateValue}
              showTime
              showToday
              onChange={(e) => handleChange(e)}
              format={"ddd, MMMM Do YYYY, HH:mm:ss"}
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
                {/* <span style={{ color: "#000", fontWeight: "600" }}>
                  {firstDay}
                </span>{" "}
                {lastDay && "to"}{" "}
                <span style={{ color: "#000", fontWeight: "600" }}>
                  {lastDay}
                </span>{" "} */}
                Selected Time & Day is already booked, Please Select another!
              </div>
            }
            type="error"
            closable
          />
        </p>
      )}

      {!isEmpty(slotObj) && (
        <div className="arrBlock">
          <div className="leftBlock">
            <div className="title">Start Day Booked</div>
            {slotArray.map((e, i) => (
              <div className="objBlock">
                <div>
                  <span>Day</span> <span>{e.start.day}</span>
                </div>
                <div>
                  <span>Time</span> <span>{e.start.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rightBlock">
            <div className="title">End Day Booked</div>
            {slotArray.map((e, i) => (
              <div className="objBlock">
                <div>
                  <span>Day</span> <span>{e.end.day}</span>
                </div>
                <div>
                  <span>Time</span> <span>{e.end.time}</span>
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
