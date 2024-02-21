import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-black">Male</span>
          <input type="checkbox" className="checkbox checkbox-primary m-1" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-black">Female</span>
          <input type="checkbox" className="checkbox checkbox-primary m-1" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
