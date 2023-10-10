import React from "react";
import { Frame } from "../../components/Frame";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="navbar">
        <div className="overlap-group">
          <div className="group">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/6zrZOTD1/img/vector.svg" />
          </div>
          <div className="div">
            <Frame className="frame-7" divClassName="frame-instance" property1="default" />
            <Frame className="frame-7-instance" divClassName="frame-instance" property1="variant-2" text="Events" />
            <Frame className="frame-7-instance" divClassName="frame-instance" property1="variant-3" text1="Points" />
            <Frame className="frame-7-instance" divClassName="frame-instance" property1="variant-4" text2="Distance" />
            <Frame className="frame-7-instance" divClassName="frame-instance" property1="variant-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
