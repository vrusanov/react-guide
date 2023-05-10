import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [showExpensesForm, setShowExpensesForm] = useState(false)

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log(e.target.value)

  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    console.log(e.target.value)

  }

  const submitHandler = (event) => {
    setShowExpensesForm(false)
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const handlerClickCancel = () => {
    setShowExpensesForm(false)
  }
  const handlerAddNewExpenses = () => {
    setShowExpensesForm(true)
  }

  return (<div>

    {showExpensesForm ? (<form onSubmit={submitHandler}>
          <div className='new-expense__controls'>
            <div className='new-expense__controls'>
              <label>Title</label>
              <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__controls'>
              <label>Amount</label>
              <input onChange={amountChangeHandler} value={enteredAmount} type="number" min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__controls'>
              <label>Date</label>
              <input onChange={dateChangeHandler} value={enteredDate} type="date"/>
            </div>
          </div>
          <div className='new-expense__actions '>
            <button type='submit'>Add Expense</button>
            <button onClick={handlerClickCancel}>Cancel</button>
          </div>
        </form>
      ) :
      (<button onClick={handlerAddNewExpenses}>Add New Expense</button>)}
  </div>)
}
export default ExpenseForm