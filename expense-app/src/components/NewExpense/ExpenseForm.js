'use scrict';
import './ExpenseForm.css';
import { useState } from 'react';

//Parent NewExpense.js
const ExpenseForm = (props) => {
  const [grabValueTitle, setValueTitle] = useState('');
  const [grabValueAmount, setValueAmount] = useState('');
  const [grabValueDate, setValueDate] = useState('');
  const [newFormState, setNewFormState] = useState(false);
  const titleEventHandler = (event) => {
    setValueTitle(event.target.value);
  };
  const amountEventHandler = (event) => {
    setValueAmount(event.target.value);
  };
  const dateEventHandler = (event) => {
    setValueDate(event.target.value);
  };

  const addNewClickHandler = (event) => {
    event.preventDefault();
    setNewFormState(() => true);
  };

  const cancelClickHandler = (event) => {
    event.preventDefault();
    setNewFormState(() => false);
  };

  const submitEventHandler = (event) => {
    event.preventDefault();
    setNewFormState(() => false);
    if (event.target.name !== 'cancel') {
      const newDay = +grabValueDate.slice(8) + 1; // new Date() day starts at 0, so need to add 1 to be on correct date
      const correctDate = grabValueDate.slice(0, 8) + newDay;

      const expenseData = {
        title: grabValueTitle,
        amount: grabValueAmount,
        date: new Date(correctDate),
      };
      // Passing the expenseData object into the props function allows the data to be accessed by the parent element
      props.onSaveExpenseData(expenseData);
      setValueTitle('');
      setValueAmount('');
      setValueDate('');
    }
  };
  if (newFormState === true) {
    return (
      <form onSubmit={submitEventHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={grabValueTitle}
              onChange={titleEventHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              onChange={amountEventHandler}
              value={grabValueAmount}
              type='number'
              min='0.01'
              step='0.01'
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              onChange={dateEventHandler}
              value={grabValueDate}
              type='date'
              min='2019-01-01'
              max='2023=12=31'
            />
          </div>
          <div className='new-expense__control'>
            <label>Add New Expense:</label>
            <button
              className='new-expense__control--cancel'
              name='cancel'
              onClick={cancelClickHandler}
            >
              Cancel
            </button>
            <button formAction='/submit' name='submit'>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <button name='add' onClick={addNewClickHandler}>
        Add New Expense
      </button>
    );
  }
};

export default ExpenseForm;
