"use client";
import React, { useState } from "react";

export const MscTabs = ({ labels = ["Tab 1", "Tab 2", "Tab 3"] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    sessionStorage.setItem("alertType", labels[index]);
  };

  const getGridColsClass = (numLabels: number) => {
    switch (numLabels) {
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      case 5:
        return "grid-cols-5";
      case 6:
        return "grid-cols-6";
      default:
        return "grid-cols-3";
    }
  };
  return (
    <>
      <ul className={`msc-tabs ${getGridColsClass(labels.length)}`}>
        {labels.map((label, index) => (
          <li
            key={index}
            className={`col-span-6 md:col-span-1 ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            <a>{label}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MscTabs;
