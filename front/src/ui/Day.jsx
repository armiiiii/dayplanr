import { useRef, useState, useEffect } from "react";

import Task from "./Task.jsx";
import CreateTodoForm from "./CreateTodoForm.jsx";

import connector from '../fetch.js';

function Day({ day, todos }) {
    const [tasks, setTodos] = useState(todos);

    const noTasksText = "No tasks for today, want to create?:)";
    const formRef = useRef(null);

    const createTodoFormCallEvent = (e) => {
        formRef.current.style.display = 'contents'
    }

    const createTodoFormCloseEvent = () => {
        formRef.current.style.display = 'none'
    }

    const createTodoEvent = (data) => { // update state of todos list dynamicly
        const response = connector.createTodo(JSON.stringify(data));
        setTodos(prevTodos => {return [
            ...prevTodos,
            response
        ]});
        createTodoFormCloseEvent();
    }

    const todosUpdate = useEffect(() => {}, [tasks]);

    return (
        <div>
            <h3>{day}</h3>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div>
                    {tasks.length !== 0 ? ( 
                        tasks.map(todo => (
                            <Task key={todo.id} order={todo.order} task={todo.task} done={todo.done} />
                        ))
                        ) : (
                            <p>{noTasksText}</p>
                        )
                    }
                </div>
                <div>
                    <button onClick={createTodoFormCallEvent}>Create Todo</button>
                </div>
            </div>
            <div ref={formRef} style={{backgroundColor: 'lightblue', zIndex: "1", display: 'none' }}>
                <button onClick={createTodoFormCloseEvent}>Close</button>
                <CreateTodoForm day={day} createTodo={createTodoEvent} />
            </div>
        </div>
    );
}

export default Day;