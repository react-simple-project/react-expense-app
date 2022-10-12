'use strict';
import './Filter.css';
const Filter = (props) => {
  const filterChangeListener = (event) => {
    props.onFilterChangeYear(event.target.value);
  };
  const uniqueYears = Array.from(props.years);
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterChangeListener}>
          <option value='All Years'>All Years</option>
          {uniqueYears.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
