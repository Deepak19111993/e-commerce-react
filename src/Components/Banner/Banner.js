import './Banner.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getFetchData } from '../../redux/data/action';
import { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
// import moment from "moment";

// import DatePicker from "react-modern-calendar-datepicker";
// import { Calendar } from "react-modern-calendar-datepicker";

// const { RangePicker } = DatePicker;

// const number = [
//   {
//     name: "One",
//   },
//   { name: "Two" },
//   { name: "Three" },
//   { name: "Four" },
// ];

// const colorBox = [
//   {
//     colorValue: "#000",
//   },
//   {
//     colorValue: "#b11919",
//   },
//   {
//     colorValue: "#3d7adb",
//   },
//   {
//     colorValue: "#cdcdcd",
//   },
// ];

// const formatValue = moment().format("ddd, MMMM Do YYYY, h:mm:ss A");

const Banner = () => {
  const navigate = useNavigate();
  // const [startdateRange, setstartdateRange] = useState("");
  // const [enddateRange, setEnddateRange] = useState("");
  // const [startDateValue, setStartDateValue] = useState("");
  // const [endDateValue, setEndDateValue] = useState("");
  // const [startStore, setStartStore] = useState([]);
  // const [endStore, setEndStore] = useState([]);

  const bookClick = () => {
    navigate('/slot');
  };

  // const handleChange = (value) => {
  //   console.log(value);
  //   setstartdateRange(value[0].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(","));
  //   setEnddateRange(value[1].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(","));

  //   let startDateObj = {};
  //   let endDateObj = {};
  //   let start = value[0].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(",");
  //   let end = value[1].format("ddd,MMMM Do YYYY,h:mm:ss,A").split(",");
  //   let temparrr = ["day", "date", "time", "ast"];
  //   for (let i = 0; i < start.length; i++) {
  //     startDateObj[temparrr[i]] = start[i];
  //   }
  //   for (let i = 0; i < end.length; i++) {
  //     endDateObj[temparrr[i]] = end[i];
  //   }

  //   // console.log(startDateObj);

  //   // let updateObj = [];
  //   // let tempObj = ["start", "end"];
  //   // for (let i = 0; i < startDateObj.length; i++) {
  //   //   updateObj[tempObj[i]] = startDateObj;
  //   // }
  //   // for (let i = 0; i < endDateObj.length; i++) {
  //   //   updateObj[tempObj[i]] = endDateObj;
  //   // }

  //   // console.log("updateObj", updateObj);

  //   setStartDateValue(startDateObj);
  //   setEndDateValue(endDateObj);

  //   let updateStartValue;
  //   let updateEndValue;

  //   //

  //   if (
  //     startStore.map((e, i) => e.day).includes(startDateObj.day) ||
  //     endStore.map((e, i) => e.day).includes(endDateObj.day)
  //   ) {
  //     updateStartValue = [...startStore];
  //     updateEndValue = [...endStore];
  //   } else {
  //     updateStartValue = [...startStore, startDateObj];
  //     updateEndValue = [...endStore, endDateObj];
  //   }

  //   // if (endStore.map((e, i) => e.day).includes(endDateObj.day)) {
  //   //   updateEndValue = [...endStore];
  //   // } else {
  //   //   updateEndValue = [...endStore, endDateObj];
  //   // }

  //   setStartStore([...updateStartValue]);
  //   setEndStore([...updateEndValue]);
  // };
  // console.log(
  //   startStore
  //     .map((e, i) => i !== startStore.length - 1 && e.day)
  //     .includes(startDateValue.day)
  // );
  // console.log(startDateValue.day);
  // console.log(startStore.map((e, i) => e.day));

  // console.log("startStore", startStore);
  // console.log("endStore", endStore);

  // useEffect(() => {
  //   let startDateObj = {};
  //   let endDateObj = {};
  //   let start = startdateRange;
  //   let end = enddateRange;
  //   let temparrr = ["day", "date", "time", "ast"];
  //   for (let i = 0; i < start.length; i++) {
  //     startDateObj[temparrr[i]] = start[i];
  //   }
  //   for (let i = 0; i < end.length; i++) {
  //     endDateObj[temparrr[i]] = end[i];
  //   }

  //   setStartDateValue(startDateObj);
  //   setEndDateValue(endDateObj);
  // }, [startdateRange, enddateRange]);

  // console.log("Start Date", startdateRange);
  // console.log("End Date", enddateRange);

  // console.log(startDateValue, endDateValue);
  // console.log(startStore.map((e, i) => e.day));
  // console.log(startDateValue.day);
  // console.log(endStore.map((e, i) => e.day));
  // console.log(endDateValue.day);

  // console.log(startStore.map((e, i) => e.day).includes(startDateValue.day));
  // console.log(endStore.map((e, i) => e.day).includes(endDateValue.day));

  // console.log(
  //   startDateValue.day,
  //   startStore.map((e, i) => e.day)
  // );
  // console.log([...startStore, startDateValue]);

  // setStartStore([...startStore, startdateRange]);

  // console.log(startStore);

  // const defaultFrom = {
  //   year: 2019,
  //   month: 4,
  //   day: 16,
  // };
  // const defaultTo = {
  //   year: 2019,
  //   month: 4,
  //   day: 19,
  // };
  // const defaultValue = {
  //   from: defaultFrom,
  //   to: defaultTo,
  // };
  // const [selectedDayRange, setSelectedDayRange] = useState(defaultValue);

  // const handleRange = (e) => {
  //   setSelectedDayRange(e);
  // };

  // console.log(selectedDayRange);
  // const [selectedDay, setSelectedDay] = useState(defaultValue);

  // const renderCustomInput = ({ ref }) => (
  //   <input
  //     readOnly
  //     ref={ref} // necessary
  //     placeholder="I'm a custom input"
  //     value={selectedDayRange ? `✅: ${selectedDayRange.day}` : ""}
  //     style={{
  //       textAlign: "center",
  //       padding: "1rem 1.5rem",
  //       fontSize: "1.5rem",
  //       border: "1px solid #9c88ff",
  //       borderRadius: "100px",
  //       boxShadow: "0 1.5rem 2rem rgba(156, 136, 255, 0.2)",
  //       color: "#9c88ff",
  //       outline: "none",
  //     }}
  //     className="my-custom-input-class" // a styling class
  //   />
  // );

  // color change on click
  // const [colorValueId, setColorValueId] = useState("");
  // const handleClick = (item) => {
  //   setColorValueId(item);
  // };

  // const dispatch = useDispatch();

  // const [active, setActive] = useState(false);

  // const [activeId, setActiveId] = useState();
  // const [selected, setSelected] = useState([]);

  // const handleClick = (id) => {
  //   if (selected.includes(id)) {
  //     // setActive(!active);
  //     let newSelected = [...selected];
  //     const index = selected.indexOf(id);
  //     console.log(index);
  //     if (index > -1) {
  //       // only splice array when item is found
  //       newSelected.splice(index, 1); // 2nd parameter means remove one item only
  //     }
  //     setSelected([...newSelected]);
  //   } else {
  //     setSelected([...selected, id]);
  //   }
  // };

  return (
    <div className="banner">
      <img
        src="https://m.media-amazon.com/images/I/81KVdS+84PL._SX3000_.jpg"
        alt=""
      />
    </div>
  );
};

export default Banner;
