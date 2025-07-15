import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function WeeklyChart({ weekCalories }) {
  // Convert to chart data
  const data = weekCalories.map((cal, index) => ({
    day: `Day ${index + 1}`,
    calories: cal,
  }));

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Weekly Calorie Plan</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="calories" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyChart;
