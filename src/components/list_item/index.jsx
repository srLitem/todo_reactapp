import React from 'react'
import './styles.css'

function ListItem(props){
    return  <li className='element'>
        <span className='title'>{props.task.title}</span>
        <span className='delete' 
        onClick={props.onRemove}
        >X</span>
        </li>
}

export default ListItem;