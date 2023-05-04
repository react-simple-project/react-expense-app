import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

//PARENT Expenses.js
const ExpensesList = (props) => {
  if (!props.items.length) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          id={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
          onDeleteExpense={props.onDeleteExpense}
          onEditExpense={props.onEditExpense}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
