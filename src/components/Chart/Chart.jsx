import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data }) => {
  //   console.log(data);

  const lineChart = data[0] ? (
    <Line
      data={{
        labels: data.map((item) => item.date),
        datasets: [
          {
            data: data.map((item) => item.confirmed),
            label: 'Confirmed',
            borderColor: '#a0aec0',
            fill: true,
          },
          {
            data: data.map((item) => item.recovered),
            label: 'Recoverd',
            borderColor: '#5dbb78',
            fill: true,
          },
          {
            data: data.map((item) => item.deaths),
            label: 'Deaths',
            borderColor: '#ef6465',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
