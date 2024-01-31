import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const TaskForm = () => {
    const [task, setTask] = useState({
        id: uuidv4(),
        title: "",
        description: "",
        completed: false,
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "tasks/addTask", payload: task });
        setTask({ id: uuidv4(), title: "", description: "", completed: false });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Task:</label>
            <input type="text" name="title" onChange={handleChange} value={task.title} className="w-full p-2 rounded-md bg-zinc-600 mb-2" placeholder="Write a title" autoFocus />
            <label>
                Description:
                <textarea
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={task.description}
                    className="w-full p-2 rounded-md bg-zinc-600 mb-2"
                    placeholder="Write a description"
                />
            </label>
            <button type="submit" className="bg-indigo-600 px-2 py-1">
                Submit
            </button>
        </form>
    );
};

export { TaskForm };
