'use scrict';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import Filter from './Filter';
import { useState } from 'react';
function Expenses(props) {
  const [grabYear, setYear] = useState('');
  const filterChangeListener = (year) => {
    setYear(year);
  };
  console.log(grabYear);
  return (
    <Card className='expenses'>
      <Filter onFilterChangeYear={filterChangeListener} />
      {props.items.map((expenses) => (
        <ExpenseItem
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
