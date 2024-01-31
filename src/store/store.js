import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import tasksReducer from "../features/tasks/tasksSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: tasksReducer,
    },
});

export { store };
