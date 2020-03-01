import React from 'react';
import './styles.css';
import ListItem from '../list_item';

function TaskList(props) {
    return <ul className='task_list'>{props.tasks.map(task => {
        return <ListItem key={task.id} task={task}
        onRemove={(e) => {
            props.onRemove(task.id)
        }}
        ></ListItem>
    })}</ul>
}

export default TaskList;