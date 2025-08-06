import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full p-4 z-50">
            <div className="max-w-3xl mx-auto">
                <div className="relative">
                    <div className='bg-gray-700 py-5 border border-gray-500 rounded-2xl'>
                        <textarea
                            rows={5}
                            placeholder="Type a message..."
                            className="w-full rounded-lg bg-gray-700 text-white px-4  pr-20 resize-none outline-none scrollbar-hide"
                        >

                        </textarea>
                    </div>
                    <button
                        className="absolute right-2 bottom-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-2 text-sm"
                    >
                        Send
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer