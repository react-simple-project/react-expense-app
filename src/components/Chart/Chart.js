import ChartBar from './ChartBar';

import './Chart.css';
//PARENT ExpensesChart.js
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxium = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          id={Math.random()}
          label={dataPoint.label}
          value={dataPoint.value}
          max={totalMaxium}
        />
      ))}
    </div>
  );
};

export default Chart;
