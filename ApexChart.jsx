// ApexChart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [83, 66, 91],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          colors: ['#FFE338', '#4CAF50', '#FF0000'],
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  return 344;
                },
              },
            },
          },
        },
        labels: [ 'SuspiciousPhoneNumbers', 'FakeWebsites','MaliciousAds'],
      },
      
      colors: ['yellow', 'green', 'red'], 
    };
  }

  render() {
    return (
      
      <div style={{ position: 'relative' }}>
      <h3 style={{ position: 'absolute', top: -115, left: '30%', transform: 'translateX(-80%)' }}>Types of Cases</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div style={{ position: 'absolute', width: '20px', height: '20px', top: -30, backgroundColor: 'blue', marginRight: '5px' }}></div>
          <span>Suspicious Phone Numbers</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div style={{ position: 'absolute', width: '20px', height: '20px',  top: -30, backgroundColor: 'green', marginRight: '5px' }}></div>
          <span>Fake Websites</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', width: '20px', height: '20px',  top: -30, backgroundColor: 'yellow', marginRight: '5px' }}></div>
          <span>Malicious Ads</span>
        </div> </div>
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
      </div>
    );
  }
}

export default ApexChart;
