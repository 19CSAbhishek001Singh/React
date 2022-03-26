import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// const DUMMY_EXPENSES = [

// ];

const App = () => {
  const[expenses,setExpenses]=useState([]); 
  const addExpenseHandler = (expense) => {
    const updatedExpense=[expense,...expenses];
    setExpenses(updatedExpense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;