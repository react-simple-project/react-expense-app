import './Expenses.css';
import Card from './UI/Card';
import Filter from './Filter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './Chart/ExpensesChart';

function Expenses(props) {
  const [grabYear, setYear] = useState('All Years');
  const filterChangeListener = (year) => {
    setYear(year);
  };
  const displayedExpenses = props.items.filter((indexItems) => {
    if (grabYear === 'All Years') {
      return indexItems;
    } else {
      return grabYear === indexItems.date.getFullYear().toString();
    }
  });

  const allYears = props.items.map((expenses) => {
    return expenses.date.getFullYear();
  });
  return (
    <Card className="expenses">
      <Filter
        years={new Set(allYears)}
        onFilterChangeYear={filterChangeListener}
      />
      <ExpensesChart expenses={displayedExpenses} />
      <ExpensesList
        items={displayedExpenses}
        onDeleteExpense={props.onDeleteExpense}
        onEditExpense={props.onEditExpense}
      />
    </Card>
  );
}

export default Expenses;
