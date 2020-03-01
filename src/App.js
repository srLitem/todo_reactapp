import React, {useState} from 'react';
import './App.css';
import Title from './components/title';
import Form from './components/form';
import TaskList from './components/task_list';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="todo_list_app">
      <div className='content'>
      <Title>To-Do List </Title>
      <Form onSubmit= {
        task => {
          const newTask = {
            title: task,
            id: Math.random()
          }
          setList(list.concat(newTask))
        }
      }></Form>
      <TaskList tasks={list}
      onRemove={(id)=>{
        setList(list.filter( (task) =>{
          return task.id!==id
        }
        ))
      }}
      ></TaskList>
      </div>
    </div>
  );
}

export default App;
