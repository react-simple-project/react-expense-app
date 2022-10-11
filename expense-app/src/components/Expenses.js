'use scrict';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import Filter from './Filter';

function Expenses(props) {
  const filterChangeListener = (year) =>{
    console.log(year)
  }
  return (
    <Card className='expenses'>
      <Filter  onFilterChangeYear={filterChangeListener}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
