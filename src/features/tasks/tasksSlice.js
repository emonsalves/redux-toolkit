import { createSlice } from "@reduxjs/toolkit";
import { addTask, changeTaskStatus, deleteTask, getTasks } from "./tasksActions";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Add the getTasks reducer
            .addCase(getTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(getTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // Add the changeTaskStatus reducer
            .addCase(changeTaskStatus.pending, (state) => {
                state.loading = true;
            })
            .addCase(changeTaskStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.data = state.data.map((task) => {
                    if (task.id === action.payload.id) {
                        return action.payload;
                    }
                    return task;
                });
            })
            .addCase(changeTaskStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // Add the addTask reducer
            .addCase(addTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            })
            .addCase(addTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // Add the deleteTask reducer
            .addCase(deleteTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.loading = false;
                state.data = state.data.filter((task) => task.id !== action.payload.id);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    },
});

export default tasksSlice.reducer;
