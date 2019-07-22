import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data = [
  {
    name: 'Page A', uv: 22, pv: 14, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 16, amt: 2210,
  },
  {
    name: 'Page C', uv: 1000, pv: 25, amt: 1000,
  },
  {
    name: 'Page D', uv: 2780, pv: 23, amt: 2000,
  },
];

export default class Charts extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/';

  render() {
    return (
      <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    );
  }
}

