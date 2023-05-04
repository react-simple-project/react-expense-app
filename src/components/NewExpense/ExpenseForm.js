import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
  const [grabValueTitle, setValueTitle] = useState(props.defaultTitle || '');
  const [grabValueAmount, setValueAmount] = useState(props.defaultAmount || '');
  const [grabValueDate, setValueDate] = useState(
    props.defaultDate ? props.defaultDate.toISOString().slice(0, 10) : '',
  );
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
    if (props.onCancel) {
      props.onCancel();
    }
  };

  const submitEventHandler = (event) => {
    event.preventDefault();
    setNewFormState(() => false);
    if (event.target.name !== 'cancel') {
      const newDay = +grabValueDate.slice(8) + 1;
      const correctDate = grabValueDate.slice(0, 8) + newDay;

      const expenseData = {
        title: grabValueTitle,
        amount: grabValueAmount,
        date: new Date(correctDate),
      };
      props.onSaveExpenseData(expenseData);
      setValueTitle('');
      setValueAmount('');
      setValueDate('');
    }
  };

  if (props.isEditing) {
    return (
      <form onSubmit={submitEventHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={grabValueTitle}
              onChange={titleEventHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              onChange={amountEventHandler}
              value={grabValueAmount}
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={dateEventHandler}
              value={grabValueDate}
              type="date"
              min="2019-01-01"
              max="2023-12-31"
            />
          </div>
          <div className="new-expense__control">
            {props.onCancel ? (
              <button
                className="new-expense__control--cancel"
                name="cancel"
                onClick={cancelClickHandler}
              >
                Cancel
              </button>
            ) : (
              <button
                name="add"
                onClick={addNewClickHandler}
              >
                Add New Expense
              </button>
            )}
            <button
              formAction="/submit"
              name="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  } else {
    if (newFormState) {
      return (
        <form onSubmit={submitEventHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={grabValueTitle}
                onChange={titleEventHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                onChange={amountEventHandler}
                value={grabValueAmount}
                type="number"
                min="0.01"
                step="0.01"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                onChange={dateEventHandler}
                value={grabValueDate}
                type="date"
                min="2019-01-01"
                max="2023-12-31"
              />
            </div>
            <div className="new-expense__control">
              <button
                className="new-expense__control--cancel"
                name="cancel"
                onClick={cancelClickHandler}
              >
                Cancel
              </button>
              <button
                formAction="/submit"
                name="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <button
          name="add"
          onClick={addNewClickHandler}
        >
          Add New Expense
        </button>
      );
    }
  }
