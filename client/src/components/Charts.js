import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, LabelList , AreaChart , Tooltip, Area, CartesianGrid, Label, ResponsiveContainer} from 'recharts';
import moment from 'moment';

// , CartesianGrid, Tooltip, Legend,

export default function Chart({ data, history }) {
  const [chartForecast, setChartForecast] = useState();
  const [chartAqi, setChartAqi] = useState();

  useEffect(() => {
     if(history){
      console.log(history)
      setChartAqi(history.history)
     }
  }, [history])

  useEffect(() => {
    const forecastArray = data.weather.daily.data.map(day => ({ name: moment(parseInt(day.time + '000')).format('dddd')[0], high: Math.round(day.temperatureMax), low: Math.round(day.temperatureMin) }));
    setChartForecast(forecastArray);
  }, [data])

  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartForecast}>
          <Line type="monotone" dataKey="high" stroke="#ffffff" fill="#fc3503" strokeWidth={2}>
            <LabelList dataKey="high" position="top" fill="#ffffff"/>
          </Line>

          <Line type="monotone" dataKey="low" stroke="#ffffff" strokeWidth={2} fill="#039dfc">
            <LabelList dataKey="low" position="bottom" fill="#ffffff"/>
          </Line>
          <XAxis dataKey="name"  padding={{ left: 20, right: 20}} stroke="#ffffff" />
          <YAxis padding={{ top: 10 }} hide/>
      </LineChart>
     </ResponsiveContainer>
    </div>
  );
}