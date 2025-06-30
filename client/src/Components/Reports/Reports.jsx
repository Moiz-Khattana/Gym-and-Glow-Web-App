import React from 'react';
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'; 
import Top from '../Dashboard/Components/Body Section/Top Section/Top';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../../App.css';
import './Reports.css'; // Create this new file for modern CSS

// Reusable chart card
function Chart({ children, title }) {
  return (
    <div className="chart-card">
      <h2 className="chart-title">{title}</h2>
      {children}
    </div>
  );
}

// Reusable legend
function ChartLegend({ legends }) {
  return (
    <div className="chart-legend">
      {legends.map((legend) => (
        <div className="legend-item" key={legend.title}>
          <span className={`legend-dot ${legend.color}`}></span>
          <span>{legend.title}</span>
        </div>
      ))}
    </div>
  );
}

// Sample data
const businessData = [
  { name: 'Jan', businesses: 10 },
  { name: 'Feb', businesses: 15 },
  { name: 'Mar', businesses: 20 },
  { name: 'Apr', businesses: 30 },
];

const userGrowthData = [
  { name: 'Jan', users: 100 },
  { name: 'Feb', users: 150 },
  { name: 'Mar', users: 180 },
  { name: 'Apr', users: 250 },
];

const lineLegends = [
  { title: 'Registered Businesses', color: 'blue-dot' },
];

const barLegends = [
  { title: 'Registered Users', color: 'green-dot' },
];

const Reports = () => {
  return (
    <div className="reports-page">
      <Sidebar />
      <div className="mainContent">
        <Top />
        <div className="reports-content">
          <h1 className="reports-heading">📊 Reports & Analytics</h1>

          <div className="chart-grid">
            <Chart title="📈 Registered Businesses Over Time">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={businessData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="businesses" stroke="#3498db" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
              <ChartLegend legends={lineLegends} />
            </Chart>

            <Chart title="📊 Registered Users Over Time">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={userGrowthData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#2ecc71" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <ChartLegend legends={barLegends} />
            </Chart>
          </div>

          <div className="chart-grid">
            <div className="chart-card coming-soon">
              <h2 className="chart-title">📌 Business Popularity</h2>
              <p>Most visited profiles and highest user interactions.</p>
              <p className="coming-label">Coming Soon...</p>
            </div>

            <div className="chart-card coming-soon">
              <h2 className="chart-title">📌 Booking & Inquiry Trends</h2>
              <p>Number of bookings made per month.</p>
              <p className="coming-label">Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
