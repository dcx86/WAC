import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

// , CartesianGrid, Tooltip, Legend,

export default function Chart ({data}) {
  const [chartData, setChartData] = useState();
  
    useEffect( () => {
      const forecastArray = data.weather.daily.data.map(day => ({name: day.time, pv:day.temperatureMax}));
      setChartData(forecastArray);
      console.log(forecastArray);
    }, [data])
    
    return (
      <LineChart width={600} height={400} data={chartData}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        <XAxis dataKey="name" />
        <YAxis dataKey="pv" />
      </LineChart>
    );
}

