import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

import Chatbox from './Chatbox';

const Main: React.FC = () => {
    const messages = useSelector((state: RootState) => state.chat.messages);
    console.log(messages);
    return (
        <main className="flex-1">
            <section className="chat-box py-12">
                {messages.map((msg, index) => (
                    <Chatbox key={msg.id} message={msg} messages={messages} index={index} />
                ))}
            </section>
        </main>
    )
}

export default Main;