import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const localStorageGrabber = () => {
  localStorage.clear();
  if (localStorage.expenses) {
    const retrievedExpenses = JSON.parse(localStorage.getItem('expenses'));
    const expenses = [...retrievedExpenses];
    expenses.forEach((object) => {
      let day = +object.date.slice(8, 10);
      object.date = new Date(object.date.slice(0, 8) + (day + 1));
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

  const deleteExpenseHandler = (expenseId) => {
    setExpenseData((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== expenseId,
      );
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  const editExpenseHandler = (updatedExpense) => {
    setExpenseData((prevExpenses) => {
      const updatedExpenses = prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense,
      );
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenseData((prevExpense) => {
      const updatedExpenses = [enteredExpenseData, ...prevExpense];
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  localStorage.setItem('expenses', JSON.stringify(expenses));
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
        onDeleteExpense={deleteExpenseHandler}
        onEditExpense={editExpenseHandler}
      />
    </div>
  );
}

export default App;
