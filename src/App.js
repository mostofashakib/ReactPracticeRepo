import React, { useState} from 'react'

function Todo({todo, index}){
    return(
        <div className="todo"> {todo.text} </div>
    )
}

// this is a component
// this component takes in the todo function as a parameter

function Form({addTodo}){
    const [value, setValue] = useState('');

    // handleSubmit is equal to the event that gets returned from the arrow function

    const handleSubmit = e => {
        // preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
        e.preventDefault();
        if (!value) return;  // if the input field is empty return
        addTodo(value);      // add whatever is inside the input field into todos
        setValue('');        // prepair for the next block of input
    }

    return(
        <form onSubmit= {handleSubmit}>
            <input
             type='text'
             className = "input" 
             value = {value}
             placeholder = "Add to Todos"
             onChange = {e => setValue(e.target.value)} />
        </form>
    )
}

function App(){
    const [todos, setTodos] = useState([
        {
            text: "This is the first example",
            isComplete: false
        },
        {
            text: "This is the second example",
            isComplete: false
        },
        {
            text: "This is the third example",
            isComplete: false
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text}]
        setTodos(newTodos)

    }

    return(
        <div className="App">
            <div className="todo=list">
                { todos.map( (todo, index) => ( <Todo key={index} todo = {todo} index = {index} /> ))}
                <Form addTodo = {addTodo} />
            </div>
        </div>
    )
}

export default App