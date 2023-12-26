// BrushBarChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Brush } from 'recharts';

const BrushBarChart = () => {
  const data = [
    { name: 'Mon', x:21, y:23,  z:50},
    { name: 'Tues',  x:22, y:-3,   z:-33},
    { name: 'Wed', x:-32, y:15,  z:32},
    { name: 'Thurs',  x:-14, y:-35,  z:23},
    { name: 'Fri',  x:-51, y:45,  z:-20},
    { name: 'Sat', x:16, y:-25,  z:29},
    { name: 'Sun', x:7, y:-17,  z:-41},
  ];

  return (
    <BarChart width={500} height={700} data={data} >
    <CartesianGrid/>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <ReferenceLine y={0} stroke="gray" />
    <Brush dataKey="name" height={30} stroke="green" />
    <Bar dataKey="x" fill="green" />
    <Bar dataKey="y" fill="blue" />
    <Bar dataKey="z" fill="yellow" />
  </BarChart>
  );
};

export default BrushBarChart;
