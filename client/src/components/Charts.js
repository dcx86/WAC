import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, LabelList , AreaChart , Tooltip, Area, CartesianGrid, Label} from 'recharts';
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
        <LabelList dataKey="high" position="top" fill="#ffffff"/>
      </Line>

      <Line type="monotone" dataKey="low" stroke="#8884d8" strokeWidth={2}>
        <LabelList dataKey="low" position="bottom" fill="#ffffff"/>
      </Line>
      <XAxis dataKey="name"  padding={{ left: 20, right: 20}} stroke="#ffffff"/>
      <YAxis padding={{ top: 10 }} hide/>
     </LineChart>

     <AreaChart width={730} height={250} data={chartAqi}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="timeStamp" stroke="#ffffff00">
          <Label value="Air Quality" offset={0} position="insideBottom" fill="#ffffff"/>
        </XAxis>
        <YAxis padding={{ bottom: 10 }} hide/>
        <Tooltip cursor={{ stroke: 'red', strokeWidth: 1 }} 
          wrapperStyle={{ backgroundColor: "red" }}
          labelStyle={{ color: "green" }}
          itemStyle={{ color: "cyan" }}
          labelFormatter={ value => `${value}`}
          formatter={(value, name) => `${value}` }
         />
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
        <XAxis dataKey="timeStamp" stroke="#ffffff00">
          <Label value="Temperature" offset={0} position="insideBottom" fill="#ffffff"/>
        </XAxis>
        <Tooltip cursor={{ stroke: 'red', strokeWidth: 1 }} 
          wrapperStyle={{ backgroundColor: "red" }}
          labelStyle={{ color: "green" }}
          itemStyle={{ color: "cyan" }}
          formatter={(value, name) => `${value}°C` }
          labelFormatter={ value => `${value}`}
        />
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>

    </div>
  );
}