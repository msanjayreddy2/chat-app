import React from "react";

const GenderCheckbox = (props) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label cursor-pointer ${
            props.selectedgender == "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-black">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary m-1"
            checked={props.selectedgender == "male"}
            onChange={() => props.ongender("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label cursor-pointer ${
            props.selectedgender == "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-black">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary m-1"
            checked={props.selectedgender == "female"}
            onChange={() => props.ongender("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
