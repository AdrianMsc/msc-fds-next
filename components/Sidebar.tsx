import componentStatusData from "@/data/components";
import Link from "next/link";
import React from "react";
import formatComponentName from "../utils/formatComponentName";

const Sidebar = () => {
  return (
    <div className="p-5 bg-white sm:max-w-[200px] sm:min-w-[200px] flex flex-col gap-1 mr-10 overflow-auto">
      <strong>Start Here</strong>
      <Link href="/docs" className="ml-5">
        Getting Started
      </Link>
      <Link href="/docs/ComponentStatus" className="ml-5">
        Component Status
      </Link>
      <strong className="text-primary-blue">Components</strong>
      {componentStatusData.map((item, idx) => (
        <React.Fragment key={idx}>
          <strong>{item.category}</strong>
          {item.components.map((comp, idx) => (
            <Link key={idx} className="ml-5" href={`/docs/${comp.name}`}>
              {formatComponentName(comp.name)}
            </Link>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
