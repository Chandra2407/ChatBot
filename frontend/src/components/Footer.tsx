import React from 'react'

const Footer: React.FC = () => {
    const [message, setMessage] = React.useState('')
    const handleClick = () => {
        if (message) {
            alert(message)
        }
    }
    return (
        <footer className="fixed bottom-0 left-0 w-full p-4 z-50 bg-gray-900 text-white h-[7rem]">
            <div className="max-w-2xl mx-auto">
                <div className="relative">
                    <div className='bg-gray-700 py-4 border border-gray-500 rounded-xl'>
                        <textarea
                            rows={2}
                            placeholder="Type a message..."
                            className="w-full rounded-md bg-gray-700 text-white px-2 pr-16 resize-none outline-none scrollbar-hide text-sm"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <button
                        className="absolute right-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white rounded px-2 py-1 text-xs"
                        onClick={handleClick}
                    >
                        SEND
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer