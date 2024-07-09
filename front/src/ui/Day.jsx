import Task from "./Task.jsx";

function Day({day, todos}) {
    const noTasksText = "No tasks for today, want to create?:)";
    return (
        <div>
            <h3>{day}</h3>
            {todos.length !== 0 ? ( 
                <div>
                    {todos.map(todo => (
                        <Task key={todo.id} order={todo.order} task={todo.task} done={todo.done}/>
                    ))}
                </div>
                ) : (
                    <p>{noTasksText}</p>
                )
            }
        </div>
    );
}

export default Day;