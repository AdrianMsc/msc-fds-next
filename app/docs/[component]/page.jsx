import fs from "fs";
import path from "path";
import React from "react";
import formatComponentName from "../../../utils/formatComponentName";

export async function generateStaticParams() {
  const componentsDir = path.join(process.cwd(), "ds-components");
  const filenames = fs.readdirSync(componentsDir);

  return filenames.map((filename) => ({
    component: filename.replace(/\.jsx$/, ""),
  }));
}

const ComponentPage = ({ params }) => {
  const { component } = params;
  const Component = require(`../../../ds-components/${component}`).default;
  const formattedName = formatComponentName(component);

  return (
    <div className="py-5 w-full h-full">
      <h2>{formattedName}</h2>
      <Component />
    </div>
  );
};

export default ComponentPage;
