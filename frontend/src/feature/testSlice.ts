import { createSlice } from "@reduxjs/toolkit";
import { addMessage } from "./chatSlice";

const initialState: TestState = {
    value: 0
};

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addMessage, (state: TestState, action: { payload: { id: string; text: string; type: string } }) => {
            state.value += 1;
        });
    }
})

export const { increment, decrement, reset } = testSlice.actions;

export default testSlice.reducer;

export interface TestState {
    value: number;
}
