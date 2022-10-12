'use scrict';
import './Card.css';

//Parent Expenses.js, ExpenseDate.js, 
const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
