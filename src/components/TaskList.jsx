import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch({ type: "tasks/deleteTask", payload: id });
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={uuidv4()} className="flex justify-between">
                    <span>{task.title}</span>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export { TaskList };
