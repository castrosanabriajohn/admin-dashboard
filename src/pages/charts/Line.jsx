import React from "react";
import { LineChart, Header } from "../../components/";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
