import React from "react";
import AreaChart from "@bit/recharts.recharts.area-chart";
import Area from "@bit/recharts.recharts.area";

const data = [
  {
    name: "Page A",
    uv: 1000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 4890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 1490,
  },
];

const Chart = () => {
  return (
    <div className="chart_js">
      <AreaChart
        width={287}
        height={110}
        data={data}
        margin={{
          top: 0,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <Area type="monotone" dataKey="uv" stroke="#0046FE" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Chart;
