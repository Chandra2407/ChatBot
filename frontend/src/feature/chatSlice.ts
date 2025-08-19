import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Message {
    id: string;
    text: string;
    type: "user" | "bot";
    avatar?: string;
    // add other fields as needed
}

export interface ChatState {
    messages: Message[];
}

const initialState: ChatState = {
    messages: [
        { id: '1', text: 'Welcome to the catGPT!', type: 'bot' },
        { id: '2', text: 'How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today?', type: 'bot' },
        { id: '2', text: 'How can I assist you today?', type: 'bot' },
        { id: '2', text: 'How can I assist you today?', type: 'bot' },
        { id: '3', text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: '3', text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: '1', text: 'Welcome to the catGPT!', type: 'bot' },
        { id: '2', text: 'How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today?', type: 'bot' },
        { id: '2', text: 'How can I assist you today?', type: 'bot' },
        { id: '2', text: 'How can I assist you today?', type: 'bot' },
        { id: '3', text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: '3', text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: '1', text: 'Welcome to the catGPT!', type: 'bot' },
        { id: '2', text: 'How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today?', type: 'bot' },
        { id: '2', text: 'How can I assist you today?', type: 'bot' },
        { id: '2', text: 'How can I assist you today?', type: 'bot' },
        { id: '3', text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: '3', text: 'I need help with my account. How can I assist you today?', type: 'user' }
    ]
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        }
    },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
