'use scrict';
import './Expenses.css';
import Card from './Card';
import Filter from './Filter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [grabYear, setYear] = useState('All Years');
  const filterChangeListener = (year) => {
    setYear(year);
  };
  const displayedExpenses = props.items.filter((items) => {
    if (grabYear === 'All Years') {
      return items;
    } else {
      return grabYear === items.date.getFullYear().toString();
    }
  });

  return (
    <Card className='expenses'>
      <Filter onFilterChangeYear={filterChangeListener} />
      <ExpensesList items={displayedExpenses} />
    </Card>
  );
}

export default Expenses;
