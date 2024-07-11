import { useState } from "react";

function CreateTodoForm({ day, createTodo }) {
    const [order, setOrder] = useState(0);
    const [todo, setTodo] = useState('');

    const orderChangeEvent = (e) => {
        setOrder(e.target.value);
    }

    const todoChangeEvent = (e) => {
        setTodo(e.target.value);
    }

    const createTodoEvent = (e) => {
        e.preventDefault();
        createTodo({"day": day, "order": order, "task": todo});
    }

    return (
        <div>
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
    );
}

export default CreateTodoForm;