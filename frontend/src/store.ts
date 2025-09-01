import { configureStore } from "@reduxjs/toolkit";
import chatReducer, { addMessage, type ChatState } from "./feature/chatSlice";
import testReducer, { increment, type TestState } from "./feature/testSlice";
import logger from "redux-logger";
import asyncReducer, { fetchUsersRtk, type AsyncState } from "./feature/asyncSlice";
export interface RootState {
    chat: ChatState;
    test: TestState;
    async: AsyncState;
}

const store = configureStore({
    reducer: {
        chat: chatReducer,
        test: testReducer,
        async: asyncReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
// store.dispatch(increment());
store.dispatch(addMessage({ id: "omg", text: "Hello, World!", type: "user" }));
store.dispatch(fetchUsersRtk());
