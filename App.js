import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Map from './Map.jsx'; 
import ApexChart from './ApexChart.jsx'; 
import BrushBarChart from './BrushBarChart.jsx'; 

function App() {
  const productName = "PRODUCT_NAME"; // Replace with your product name

  const data = [
    { name: 'Mon', MaliciousAds: 40, SuspiciousPhoneNumbers: 20, FakeWebsites: 70, amt: 24 },
    { name: 'Tues', MaliciousAds: 30, SuspiciousPhoneNumbers: 38, FakeWebsites: 89, amt: 22 },
    { name: 'Wed', MaliciousAds: 20, SuspiciousPhoneNumbers: 80, FakeWebsites: 76, amt: 29 },
    { name: 'Thurs', MaliciousAds: 78, SuspiciousPhoneNumbers: 8, FakeWebsites: 25, amt: 20 },
    { name: 'Fri', MaliciousAds: 18, SuspiciousPhoneNumbers: 40, FakeWebsites: 35, amt: 21 },
    { name: 'Sat', MaliciousAds: 39, SuspiciousPhoneNumbers: 38, FakeWebsites: 14, amt: 25 },
    { name: 'Sun', MaliciousAds: 49, SuspiciousPhoneNumbers: 43, FakeWebsites: 31, amt: 10 },
  ];

  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1 id="product-name" style={{ backgroundColor: 'violet', color: 'white' }}>
          {productName}
        </h1>
      </header>

      {/* Navbar */}
      <div className="navbar">
        <h3>Dashboard</h3>
        <div className="navbar-links">
          <a href="/profile">Profile</a>
          <a href="/reports">Reports</a>
          <a href="/downloads">Downloads</a>
        </div>
        <div className="navbar-right">
          <button className="notification-bell">
            <i className="fas fa-bell"></i>
          </button>
          <div className="date-container">
            <span>Date: </span>
            <span>Month: </span>
            <span>Year: </span>
          </div>
          <button className="add-filter-button">Add Filter</button>
        </div>
      </div>

      {/* Chart Heading */}
      <div className="chart-heading">
        <h3>Cases Timeline</h3>
      </div>
      <div className="chart-container">
        {/* Line Chart */}
        <div className="chart-item">
          <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            {/* Gridlines */}
            <CartesianGrid strokeDasharray="3 3" />

            {/* X-Axis (Categories) */}
            <XAxis dataKey="name" />

            {/* Y-Axis (Values) */}
            <YAxis />

            {/* Tooltip for hovered data points */}
            <Tooltip />

            {/* Legend for differentiating lines */}
            <Legend />

            {/* Line for "Malicious Ads" data */}
            <Line type="monotone" dataKey="MaliciousAds" stroke="blue" activeDot={{ r: 8 }} />

            {/* Line for "Suspicious Phone Numbers" data */}
            <Line type="monotone" dataKey="SuspiciousPhoneNumbers" stroke="yellow" />

            {/* Line for "Fake Websites" data */}
            <Line type="monotone" dataKey="FakeWebsites" stroke="green" />
          </LineChart>
        </div>
        <div className="chart-item1">
          <ApexChart />
        </div>
        <div className="chart-item2">
          <h3>Active Threat Regions</h3>
          <Map />
        </div>
        <div className="chart-item3">
          <h3>Trend Analysis</h3>
          <BrushBarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
