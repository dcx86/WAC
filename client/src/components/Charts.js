import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, LabelList } from 'recharts';
import moment from 'moment';

// , CartesianGrid, Tooltip, Legend,

export default function Chart ({data}) {
  const [chartData, setChartData] = useState();
  
    useEffect( () => {
      const forecastArray = data.weather.daily.data.map(day => ({name: moment(parseInt(day.time + '000')).format('dddd')[0], high:Math.round(day.temperatureMax), low:Math.round(day.temperatureMin)}));
      setChartData(forecastArray);
    }, [data])
    
    return (
      <LineChart width={600} height={400} data={chartData}>
        <Line type="monotone" dataKey="high" stroke="#8884d8" strokeWidth={2}>
          <LabelList dataKey="high" position="top" />
        </Line>

        <Line type="monotone" dataKey="low" stroke="#8884d8" strokeWidth={2}>
          <LabelList dataKey="low" position="bottom" />
        </Line>
        <XAxis dataKey="name" />

      </LineChart>
    );
}

