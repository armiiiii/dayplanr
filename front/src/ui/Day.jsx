import { useRef, useState } from "react";
import Task from "./Task.jsx";

import connector from "../fetch.js";


function Day({day, todos}) {
    const formRef = useRef(null);
    const noTasksText = "No tasks for today, want to create?:)";
    
    const [order, setOrder] = useState(0);
    const [todo, setTodo] = useState('');
    
    const createTodoFormCloseEvent = () => {
        formRef.current.style.display = 'none';
    }

    const createTodoFormCallEvent = () => {
        formRef.current.style.display = 'contents';
    }

    const orderChangeEvent = (e) => {
        setOrder(e.target.value);
    }

    const todoChangeEvent = (e) => {
        setTodo(e.target.value);
    }

    const createTodoEvent = (e) => {
        e.preventDefault();
        connector.createTodo(JSON.stringify({
            "day": day,
            "order": order,
            "task": todo,
        }));
    }

    const createTodoForm = (
        <div ref={formRef} style={{backgroundColor: 'lightblue', zIndex: "1", display: 'none'}}>
            <div>
                <button onClick={createTodoFormCloseEvent}>Close</button>
            </div>
            <div>
                <h4>Create todo</h4>
                <form onSubmit={createTodoEvent}>
                    <input display="none" name="day" value={day} readOnly />
                    <label>Enter order</label>
                    <input required onChange={orderChangeEvent} name="order" type="number" value={order}/>
                    <label>Enter todo title</label>
                    <input required onChange={todoChangeEvent} name="task" type="text" value={todo} />
                    <input type="submit" />
                </form>                
            </div>
        </div>
    )

    return (
        <div>
            <h3>{day}</h3>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div>
                    {todos.length !== 0 ? ( 
                        todos.map(todo => (
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
            <div>
                {createTodoForm}
            </div>
        </div>
    );
}

export default Day;