import React from "react";
import CustomButton from "../CustomButton/CustomButton";

export default function Content({
  contentHeading,
  heading,
  description,
  btnText,
  bgColor,
}) {
  return (
    <div className="analytics-content">
      <p className="content-heading">{contentHeading}</p>
      <h2>{heading}</h2>
      <p className="description">{description}</p>
      <CustomButton btnContent={btnText} bgColor={bgColor} />
    </div>
  );
}
