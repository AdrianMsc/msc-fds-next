import AlphabeticalPager, {
  AlphabeticalPagerCode,
} from "@/ds-components/AlphabeticPager";
import React from "react";

const AlphabeticPagerPage = () => {
  return (
    <>
      <p className="mt-10 text-blue-600">Navigation</p>
      <h2>Alphabetic Pager</h2>
      <AlphabeticalPager />
      <AlphabeticalPagerCode />
    </>
  );
};

export default AlphabeticPagerPage;
