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

  var arrValue = [0, 1, 2, 3, 4, 5, 6];

  // var greaterArr = [];
  // var lessArr = [];
  // var equalArr = [];
  var getIndArr = [];

  const handleChange = (value) => {
    console.log(value);
    console.log("AFTER", value[0].isAfter(value[1]));
    console.log("BEFORE", value[0].isBefore(value[1]));
    console.log("SAME AFTER", value[0].isSameOrAfter(value[1]));
    console.log("PASKDPOA", value[0].day(), value[1].day());
    // console.log(moment().range(value[0].day(), value[1].day()));

    // console.log(moment.duration(value[0].day().diff(value[1].day())).asDays());
    // setstartdateRange(value[0].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(","));
    // setEnddateRange(value[1].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(","));

    var firstValue = value[0].day();
    var lastValue = value[1].day();

    var firstIn = arrValue.indexOf(firstValue);
    var lastIn = arrValue.indexOf(lastValue);

    // console.log(arrValue.indexOf(firstValue));
    // console.log(arrValue.indexOf(lastValue));

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
        for (let i = arrValue.indexOf(firstValue); i <= lastIn; i++) {
          console.log("Less", i);
          getIndArr.push(i);
        }
      }
    }

    console.log("getIndArr", getIndArr);

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
      getIndex: getIndArr,
    });

    console.log(slotArray.map((e) => e?.getIndex).includes(slotObj?.getIndex));
  };

  // console.log(arrValue.some((e) => getIndArr.includes(e)));
  console.log(
    "ArrSlot",
    slotArray.map((e) => e?.getIndex.map((e) => slotObj?.getIndex.includes(e)))
  );

  // console.log(
  //   slotArray.some((e) =>
  //     e?.selectedSlot?.getIndex.includes(
  //       slotObj?.selectedSlot?.getIndex?.map((e) => e)
  //     )
  //   )
  // );

  // console.log(slotObj?.getIndex.includes(10));

  console.log("slotArray", slotArray);

  var newArrforCoun = slotArray.map((e) =>
    e?.getIndex.map((e) => slotObj?.getIndex.includes(e))
  );

  useEffect(() => {
    // Object.values(slotObj).length > 0 && setSlotArray([...slotArray, slotObj]);
    // !isEmpty(slotObj) && setSlotArray([...slotArray, slotObj]);

    const dk = slotArray.map((e) => e?.getIndex).includes(slotObj?.getIndex);

    console.log("dk", dk);

    if (
      slotArray.map((e, i) => e?.start?.day).includes(slotObj?.start?.day) ||
      (slotArray.map((e, i) => e?.end?.day).includes(slotObj?.end?.day) &&
        newArrforCoun.map((e) => e.includes(true)))
    ) {
      !isEmpty(slotObj) && setSlotArray([...slotArray]);
      setError(true);
    } else {
      !isEmpty(slotObj) && setSlotArray([...slotArray, slotObj]);
      setError(false);
    }

    // new functionality
  }, [slotObj]);

  console.log("slotObj", slotObj);
  console.log("slotArray", slotArray);

  console.log(
    "www",
    slotArray.map((x) => x?.getIndex.includes(slotObj?.getIndex))
  );
  // console.log(arrValue.some((e) => slotArray?.getIndArr.indexOf(e)));

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
