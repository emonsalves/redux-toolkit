import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { changeTaskStatus, deleteTask, getTasks } from "../features/tasks/tasksActions";
import { StateContext } from "../context/StateProvider";

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.data);
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error);
    const { updateTask, isEditing, updateEditing } = useContext(StateContext);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const captureTask = (task) => {
        updateTask(task);
        updateEditing(true);
    };

    const cancelEditing = () => {
        updateTask({
            id: null,
            title: "",
            description: "",
            completed: false,
        });
        updateEditing(false);
    };

    return (
        <>
            {loading && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}

            {!loading && tasks && (
                <ul style={{ width: "100%", margin: "auto", decoration: "number" }}>
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                                cursor: "pointer",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <label onClick={() => dispatch(changeTaskStatus(task)).then(() => setTrigger(!trigger))}>{task.title}</label>
                                <label>{task.description}</label>
                                <div>
                                    <button onClick={() => dispatch(deleteTask(task)).then(() => setTrigger(!trigger))}>
                                        <span role="img" aria-label="delete">
                                            ❌
                                        </span>
                                    </button>
                                    {!isEditing ? (
                                        <button onClick={() => captureTask(task)}>
                                            <span role="img" aria-label="edit">
                                                ✏️
                                            </span>
                                        </button>
                                    ) : (
                                        <button onClick={() => cancelEditing()}>
                                            <span role="img" aria-label="cancel">
                                                🚫
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export { TaskList };
