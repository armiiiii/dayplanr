import Task from "./Task.jsx";

function Day({ nameOfDay, tasks }) {
    const noTasksText = "No tasks for today, want to create?:)"
    return (
        <div>
            <h1>{{ nameOfDay }}</h1>
            {tasks.length != 0 ? ( 
                <div>
                    {
                        tasks.map((task) => {
                            <Task key={task.id} order={task.order} task={task.task} done={task.done}/>
                        }) 
                    }
                </div>
                ) : (
                    <h1>{noTasksText}</h1>
                )
            }
        </div>
    );
}

export default Day;