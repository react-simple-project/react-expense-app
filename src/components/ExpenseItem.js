import Card from './UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import ExpenseForm from './NewExpense/ExpenseForm';

//Parent ExpenseList.js
function ExpenseItem(props) {
  const [isEditing, setIsEditing] = useState(false);

  const onEdit = () => {
    setIsEditing(true);
  };

  const onSaveEdit = (updatedExpense) => {
    setIsEditing(false);
    props.onEditExpense(updatedExpense);
  };

  const onDelete = () => {
    props.onDeleteExpense(props.id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        {isEditing ? (
          <ExpenseForm
            onSaveExpenseData={onSaveEdit}
            onCancel={() => setIsEditing(false)}
            defaultTitle={props.title}
            defaultAmount={props.amount}
            defaultDate={props.date}
          />
        ) : (
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <Icon
              width="30px"
              onClick={onEdit}
              icon="material-symbols:edit"
              color="orange"
            />
            <Icon
              width="30px"
              icon="solar:trash-bin-minimalistic-bold"
              color="red"
              onClick={onDelete}
            />
          </div>
        )}
      </Card>
    </li>
  );
}

export default ExpenseItem;
