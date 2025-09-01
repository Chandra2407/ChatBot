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
        { id: crypto.randomUUID(), text: 'Welcome to the catGPT!', type: 'bot' },
        { id: crypto.randomUUID(), text: 'How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today?', type: 'bot' },
        { id: crypto.randomUUID(), text: 'How can I assist you today?', type: 'bot' },
        { id: crypto.randomUUID(), text: 'How can I assist you today?', type: 'bot' },
        { id: crypto.randomUUID(), text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: crypto.randomUUID(), text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: crypto.randomUUID(), text: 'Welcome to the catGPT!', type: 'bot' },
        { id: crypto.randomUUID(), text: 'How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today?', type: 'bot' },
        { id: crypto.randomUUID(), text: 'How can I assist you today?', type: 'bot' },
        { id: crypto.randomUUID(), text: 'How can I assist you today?', type: 'bot' },
        { id: crypto.randomUUID(), text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: crypto.randomUUID(), text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: crypto.randomUUID(), text: 'Welcome to the catGPT!', type: 'bot' },
        { id: crypto.randomUUID(), text: 'How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today?', type: 'bot' },
        { id: crypto.randomUUID(), text: 'How can I assist you today?', type: 'bot' },
        { id: crypto.randomUUID(), text: 'How can I assist you today?', type: 'bot' },
        { id: crypto.randomUUID(), text: 'I need help with my account. How can I assist you today?', type: 'user' },
        { id: crypto.randomUUID(), text: 'I need help with my account. How can I assist you today?', type: 'user' }
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
