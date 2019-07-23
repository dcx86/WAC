import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, LabelList , AreaChart , Tooltip, Area, CartesianGrid} from 'recharts';
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
      <LineChart width={600} height={400} data={chartForecast}>
      <Line type="monotone" dataKey="high" stroke="#8884d8" strokeWidth={2}>
        <LabelList dataKey="high" position="top" />
      </Line>

      <Line type="monotone" dataKey="low" stroke="#8884d8" strokeWidth={2}>
        <LabelList dataKey="low" position="bottom" />
      </Line>
      <XAxis dataKey="name" />

     </LineChart>

     <AreaChart width={730} height={250} data={chartAqi}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="timeStamp" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="aqi" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>

      
     <AreaChart width={730} height={250} data={chartAqi}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="timeStamp" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>

    </div>
  );
}

