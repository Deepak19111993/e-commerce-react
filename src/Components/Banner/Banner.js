import "./Banner.scss";
import { useSelector, useDispatch } from "react-redux";
import { getFetchData } from "../../redux/data/action";
import { useEffect } from "react";

const Banner = () => {
  // const dispatch = useDispatch();

  return (
    <div className="banner">
      {/* <button onClick={() => dispatch(getFetchData())}>Button</button> */}
      {/* <div class="t">
        <div>
          <div class="triangle">
            <span>SEARCH</span>
            <span>V</span>
          </div>
        </div>
        <div>
          <div class="triangle">
            <span>SEARCH</span>
            <span>V</span>
          </div>
        </div>
        <div>
          <div class="triangle">
            <span>SEARCH</span>
            <span>V</span>
          </div>
        </div>
        <div>
          <div class="triangle">
            <span>SEARCH</span>
            <span>V</span>
          </div>
        </div>
        <div>
          <div class="triangle">
            <span>SEARCH</span>
            <span>V</span>
          </div>
        </div>
        <div>
          <div class="triangle">
            <span>SEARCH</span>
            <span>V</span>
          </div>
        </div>
      </div> */}
      <img
        src="https://m.media-amazon.com/images/I/81KVdS+84PL._SX3000_.jpg"
        alt=""
      />
    </div>
  );
};

export default Banner;
