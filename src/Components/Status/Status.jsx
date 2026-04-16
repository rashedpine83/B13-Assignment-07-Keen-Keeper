import React, { useContext } from 'react';
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Legend
} from 'recharts';

import { addTimelineContext } from '../../Context/Context';

const Dashboard = () => {
  const { addTimeline } = useContext(addTimelineContext);

  const timeline = addTimeline || [];

  // 🔥 Count types properly
  const counts = timeline.reduce((acc, item) => {
    const type = item.type?.toLowerCase();
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  // 📊 Chart data
  const data = [
    { name: "Call", value: counts.call || 0 },
    { name: "Text", value: counts.text || 0 },
    { name: "Video", value: counts.video || 0 }
  ];

  const COLORS = ['#3b82f6', '#22c55e', '#f59e0b'];

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <h2 className='text-2xl text-center mt-10'>
        Timeline Breakdown
      </h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;