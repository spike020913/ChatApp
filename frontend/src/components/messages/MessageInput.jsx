import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';
const MessageInput = () => {
    const [message, setMessage] = useState('')
    const { loading, sendMessage } = useSendMessage()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit} className='px-4 my-3'>
            <div className="w-full relative">
                <input type="text" placeholder="Type a message" className='w-full border border-slate-500 rounded-lg px-4 py-2'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <span className='loading loading-spinner'></span> : <BsSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput