import React from 'react'
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseFormDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onUpdateExpenses(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseFormDataHandler} />
    </div>)
}

export default NewExpense;