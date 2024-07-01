function Task({ order, task, done }) {
    return (
    <div>
        <div>
            <div>
                <p>{{ order }}</p>
            </div>
            <div>
                <p style={done ? "textDecoration: line-thorough;" : ""}>{{task}}</p>
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