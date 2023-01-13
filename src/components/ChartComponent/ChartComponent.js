import React from 'react';
import './ChartComponent.scss';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Nov 1',
    Sales: 3000,
  },
  {
    name: 'Nov 4',
    Sales: 1500,
  },
  {
    name: 'Nov 8',
    Sales: 3000,
  },
  {
    name: 'Nov 12',

    Sales: 1100,
  },
  {
    name: 'Nov 16',

    Sales: 3190,
  },
  {
    name: 'Nov 20',

    Sales: 1500,
  },
  {
    name: 'Nov 24',

    Sales: 3390,
  },
  {
    name: 'Nov 25',
    Sales: 1500,
  },
  {
    name: 'Nov 26',

    Sales: 2500,
  },
  {
    name: 'Nov 27',

    Sales: 3300,
  },
  {
    name: 'Nov 30',

    Sales: 1000,
  },
];

const ChartComponent = () => {
  return (
    <div className="chart">
      <div className="chart-content">
        {/* CONTENT-1 */}
        <div className="content-1">
          <div className="times">
            <p style={{ color: '#474747' }}>Day</p>
            <p>Week</p>
            <p>Month</p>
            <p>Year</p>
          </div>
          <div className="export-details-btn">
            <button>Export Details</button>
          </div>
        </div>
        <h1>৳ 45,000</h1>
        <br />
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart
          width={100}
          height={80}
          data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1E2772" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            stroke="#BCBCBC"
            style={{ fontWeight: '800',borderBottom:"none" }}

          />
       
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Sales"
            stroke="#000AFF"
            fillOpacity={1}
            fill="url(#sales)"
            // style={{border:"5px solid black"}}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
