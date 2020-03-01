import React from 'react';
import './styles.css';

class NewForm extends React.Component{

    state = {
        new_task : ''
    }

    render(){
        return (
        <form className='new_form'
        onSubmit = {
            (e) => {
                e.preventDefault();
                console.log('Uyzonis');
            }
        }
        >
            <input 
            className='todo_task' 
            placeholder='ToDo Task' 
            value={this.state.new_task}
            onChange={ (a) => {
                const text = a.target.value;
                this.setState({new_task: text})
            }
            }
            />
        </form>
        );
    }
}

export default NewForm;