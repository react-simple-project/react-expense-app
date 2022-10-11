'use scrict';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import { useState } from 'react';

const localStorageGrabber = () => {
  if (localStorage.expenses) {
    const retrievedExpenses = JSON.parse(localStorage.getItem('expenses'));
    const expenses = [...retrievedExpenses];
    expenses.forEach((object) => {
      object.date = new Date(object.date.slice(0, 10));
    });
    return expenses;
  } else {
    const expenses = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
      },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];
    return expenses;
  }
};
const test_expenses = localStorageGrabber();
function App() {
  const [expenses, setExpenseData] = useState(test_expenses);

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenseData((prevExpense) => {
      return [enteredExpenseData, ...prevExpense];
    });
  };
  localStorage.setItem('expenses', JSON.stringify(expenses));
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
