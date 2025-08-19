import { configureStore } from "@reduxjs/toolkit";
import chatReducer, { type ChatState } from "./feature/chatSlice";
export interface RootState {
    chat: ChatState;
}

const store = configureStore({
    reducer: {
        chat: chatReducer
    },
});

export default store;
