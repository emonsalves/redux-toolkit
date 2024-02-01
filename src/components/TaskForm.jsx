import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addTask, getTasks, editTask } from "../features/tasks/tasksActions";
import { StateContext } from "../context/StateProvider";

const TaskForm = () => {
    const { task, updateTask, isEditing, resetTask, resetEditing } = useContext(StateContext);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            dispatch(editTask(task)).then(() => dispatch(getTasks()));
        } else {
            dispatch(addTask(task)).then(() => dispatch(getTasks()));
        }
        resetTask();
        resetEditing();
    };

    const onInputChange = (e) => {
        updateTask({ ...task, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{!isEditing ? "Adding New Task" : "Edit Task"}</h1>
            <input type="text" placeholder="Title" value={task.title} name="title" onChange={(e) => onInputChange(e)} />
            <textarea placeholder="Description" value={task.description} name="description" onChange={(e) => onInputChange(e)} />
            <button type="submit">{!isEditing ? "Add" : "Edit"}</button>
        </form>
    );
};

export { TaskForm };
