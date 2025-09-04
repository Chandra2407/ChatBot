import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsersRtk = createAsyncThunk("async/fetchUsers", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
});

const asyncSlice = createSlice({
    name: "async",
    initialState: {
        loading: false,
        error: null,
        users: []
    } as AsyncState,
    reducers: {}, // Add empty reducers object
    extraReducers: (builder) => {
        builder.addCase(fetchUsersRtk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsersRtk.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsersRtk.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = typeof action.payload === "string" ? action.payload : (action.error?.message ?? "Unknown error");
        });
    }
});

export default asyncSlice.reducer;

export interface AsyncState {
    loading: boolean;
    error: string | null;
    users: Array<{ id: string; name: string }>;
}
