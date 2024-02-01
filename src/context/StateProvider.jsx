import { createContext, useState } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [task, setTask] = useState({
        id: null,
        title: "",
        description: "",
        completed: false,
    });
    const [isEditing, setIsEditing] = useState(false);

    const updateTask = (newTask) => {
        setTask(newTask);
    };

    const resetTask = () => {
        setTask({
            id: null,
            title: "",
            description: "",
            completed: false,
        });
    };

    const updateEditing = (value) => {
        setIsEditing(value);
    };

    const resetEditing = () => {
        setIsEditing(false);
    };

    const data = {
        task,
        updateTask,
        resetTask,
        isEditing,
        updateEditing,
        resetEditing,
    };

    return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

StateProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { StateContext, StateProvider };
