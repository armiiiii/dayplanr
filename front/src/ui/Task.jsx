function Task({order, task, done}) {
    return (
    <div>
        <div>
            <div>
                <p>{ order }</p>
            </div>
            <div>
                <p>{ task }</p>
            </div>
            <div>
                <button>Done</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    </div>);
}

export default Task;