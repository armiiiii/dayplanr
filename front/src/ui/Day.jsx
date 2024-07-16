import { useRef, useState } from "react";

import Task from "./Task.jsx";
import CreateTodoForm from "./CreateTodoForm.jsx";

import connector from '../fetch.js';

function Day({ day, todosFetched }) {
    const [todos, setTodos] = useState(todosFetched);

    const noTasksText = "No todos for today, want to create?:)";
    const formRef = useRef(null);

    const createTodoFormCallEvent = () => {
        formRef.current.style.display = 'contents'
    }

    const createTodoFormCloseEvent = () => {
        formRef.current.style.display = 'none'
    }

    const createTodoEvent = (data) => { // update state of todos list dynamicly
        const sendRequest = async () => {
            setTodos(await connector.createTodo(JSON.stringify(data)));

        }
        createTodoFormCloseEvent();
        sendRequest();
    }

    const deleteTodoEvent = (id) => {
        const sendDelete = async () => {
            await connector.deleteTodo(id);
        }
        sendDelete();
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const updateTodoEvent = (data) => {
        const sendPut = async () => {
            await connector.updateTodo(data);
        }
        sendPut();
    }

    return (
        <div>
            <h3>{day}</h3>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div>
                    {
                        todos.length !== 0 ? ( 
                            todos.map(todo => (
                                <Task key={todo.id} 
                                    id={todo.id} 
                                    order={todo.order} 
                                    task={todo.task} 
                                    done={todo.done} 
                                    deleteTodoEvent={deleteTodoEvent}
                                    updateTodoEvent={updateTodoEvent}
                                />
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