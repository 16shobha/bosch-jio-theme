import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line
  } from "recharts";
const Linechart = () => {
    const data = [
        {x:"15/6/2023", y:0},
        {x:"19/6/2023", y:50},
        {x:"20/6/2023", y:100},
        {x:"25/6/2023", y:50},
        {x:"28/6/2023", y:100},
      ];
      function formatYAxis(value) {
        switch(value) {
          case 0:
            return "Low";
          case 50:
            return "Medium";
          case 100:
            return "High";
          default:
            return ""
        }
      }
  return (
    <div>
       <LineChart width={500} height={500} data={data}>
          <CartesianGrid/>
          <XAxis dataKey="x" />
          <YAxis yAxisId="left-axis" tickFormatter={formatYAxis}/>
          <YAxis yAxisId="right-axis" orientation="right" tickFormatter={formatYAxis} />
          <Line yAxisId="left-axis" type="monotone" dataKey="y" 
          stroke="green"/>
        </LineChart>
    </div>
  )
}

export default Linechart
