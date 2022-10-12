import './ChartBar.css';

//PARENT: Chart.js
const ChartBar = (props) => {
  let barFilling = '0%';
  if (props.max > 0) {
    barFilling = Math.round((props.value / props.max) * 100) + '%';
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: barFilling }}></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
