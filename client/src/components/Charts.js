import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const chartConfig = [
  {
    name: 'Page A',  pv: 23, 
  },
  {
    name: 'Page B',  pv: 27, 
  },
  {
    name: 'Page C',  pv: 29, 
  },
  {
    name: 'Page D',  pv: 30, 
  },
];

export default function Chart (data) {
    console.log(data)
    return (
      <LineChart width={300} height={100} data={chartConfig}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    );
}

