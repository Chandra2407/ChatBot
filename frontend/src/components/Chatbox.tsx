import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import type { Message } from '../feature/chatSlice';

type ChatboxProps = {
    message: Message;
    messages?: Message[];
    index?: number;
};

const Chatbox: React.FC<ChatboxProps> = ({ message = { id: '', text: '', type: 'user', avatar: '' }, messages = [], index }) => {
    return (
        <div className={`message ${message.type} flex items-center gap-2 max-w-[calc(100%-2rem)] ${message.type === 'user' ? 'ml-auto flex-row-reverse bg-gray-800' : 'mr-auto bg-cyan-900'} mb-2 px-3 py-4 rounded-lg w-fit`}>
            {
                messages[index! - 1]?.type !== message.type && (
                    message.avatar ? (
                        <img src={message.avatar} alt="" className="w-8 h-8 rounded-full" />
                    ) : (
                        <FaUserCircle size="2rem" color="#9CA3AF" />
                    )
                )
            }
            <p>{message.text}</p>
        </div>
    )
}

export default Chatbox