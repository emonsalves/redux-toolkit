import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
    try {
        const response = await axios.get("https://641447dd727d1c0df00622d2.mockapi.io/api/v1/tasks");
        return response.data;
    } catch (error) {
        return error;
    }
});

export const changeTaskStatus = createAsyncThunk(
    "tasks/changeTaskStatus",

    async (task) => {
        try {
            const response = await axios.put(`https://641447dd727d1c0df00622d2.mockapi.io/api/v1/tasks/${task.id}`, {
                ...task,
                completed: !task.completed,
            });
            return response.data;
        } catch (error) {
            return error;
        }
    },
);

export const addTask = createAsyncThunk("tasks/addTask", async ({ title, description }) => {
    try {
        const response = await axios.post("https://641447dd727d1c0df00622d2.mockapi.io/api/v1/tasks", { title, description, completed: false });
        return response.data;
    } catch (error) {
        return error;
    }
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (task) => {
    try {
        const response = await axios.delete(`https://641447dd727d1c0df00622d2.mockapi.io/api/v1/tasks/${task.id}`);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const editTask = createAsyncThunk("tasks/editTask", async (task) => {
    try {
        const response = await axios.put(`https://641447dd727d1c0df00622d2.mockapi.io/api/v1/tasks/${task.id}`, task);
        return response.data;
    } catch (error) {
        return error;
    }
});
