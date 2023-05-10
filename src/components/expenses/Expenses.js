import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const {data} = props
  const [filteredParam, setFilteredParam] = useState('2019')


  const addFilterValueHandler = (sandedFilterValue) => {
    setFilteredParam(sandedFilterValue)
  }

  const filteredArr = data.filter((item) =>
    item.date.getFullYear() === parseInt(filteredParam)
  )

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredParam} onAddFilterValue={addFilterValueHandler}/>
        <ExpensesChart expenses={filteredArr} />
        <ExpensesList items={filteredArr}/>
      </Card>
    </div>
  )
}

export default Expenses