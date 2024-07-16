import { useState } from "react";

function Task(props) {
    const id = props.id;
    const deleteTodoEvent = props.deleteTodoEvent;
    const updateTodoEvent = props.updateTodoEvent;
    const [editing, setEditing] = useState(false);

    const [order, setOrder] = useState(props.order);
    const [task, setTask] = useState(props.task);
    const [done, setDone] = useState(props.done);

    return (
    <div>
        <div style={{display: "flex", flexDirection: 'row'}}>
            <div>
                {!editing ? (
                    <>
                        <div>
                            <p>{ order }</p>
                            <p style={ done ? ({textDecoration: 'line-through'}) : ({})}>{ task }</p>
                        </div>
                        <div>
                            <button onClick={() => {setDone(!done)}}>Done</button>
                            <button onClick={() => {setEditing(true)}}>Edit</button>
                            <button onClick={() => {deleteTodoEvent(id)}}>Delete</button>
                        </div>
                    </>
                ) : (
                    <>
                        <input onChange={(e) => {setOrder(e.target.value)}} value={order} name="order" type="number"/>
                        <input onChange={(e) => {setTask(e.target.value)}} value={task} name="order" type="text"/>
                        <input onClick={() => {updateTodoEvent({
                                    "id": id, 
                                    "order": order, 
                                    "task": task, 
                                    "done": done
                                })}} 
                            type="submit"
                        />
                        <button onClick={() => {setEditing(false)}}>Stop editing</button>
                    </>
                )}
            </div>
        </div>
    </div>);
}

export default Task;