import React, { useEffect, useState } from 'react';
import { LineChart, Line } from 'recharts';

// XAxis, YAxis, CartesianGrid, Tooltip, Legend,

export default function Chart ({data}) {
  const [chartData, setChartData] = useState();
  
    useEffect( () => {
      const forecastArray = data.weather.daily.data.map(day => ({name: day.time, pv:day.temperatureMax}));
      setChartData(forecastArray);
    }, [data])
    
    return (
      <LineChart width={300} height={100} data={chartData}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    );
}

