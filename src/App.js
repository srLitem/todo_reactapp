import React from 'react';
import './App.css';
import Title from './components/title';
import Form from './components/form';

function App() {
  return (
    <div className="todo_list_app">
      <div className='content'>
      <Title>To-Do List </Title>
      <Form></Form>
      </div>
    </div>
  );
}

export default App;
