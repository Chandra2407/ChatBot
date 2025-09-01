import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

import Chatbox from './Chatbox';

const Main: React.FC = () => {
    const messages = useSelector((state: RootState) => state.chat.messages);
    return (
        <main className="h-[calc(100vh-8rem)] overflow-y-auto pt-4 pb-12 scrollbar-hide">
            <section className="chat-box">
                {messages.map((msg, index) => (
                    <Chatbox key={msg.id} message={msg} messages={messages} index={index} />
                ))}
            </section>
        </main>
    )
}

export default Main;