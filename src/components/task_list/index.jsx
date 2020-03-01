import React from 'react';
import './styles.css';

function TaskList(props){
return <ul className='task_list'>{props.tasks.map(task =>{
    return <li className='element' key={task.id}>{task.title}</li>
})}</ul>
}

export default TaskList;