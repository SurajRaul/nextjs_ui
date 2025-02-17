"use client";
import Image from "next/image";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 55,
    fill: "#83a6ed",
  },
  {
    name: "Boys",
    count: 45,
    fill: "#8dd1e1",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          width={50}
          height={50}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-4 h-4 bg-[#83a6ed] rounded-xs" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-4 h-4 bg-[#8dd1e1] rounded-xs" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default CountChart;
