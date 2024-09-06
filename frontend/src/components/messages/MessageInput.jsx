import React from 'react'
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
    return (
        <form action="" className='px-4 my-3'>
            <div className="w-full relative">
                <input type="text" placeholder="Type a message" className='w-full border border-slate-500 rounded-lg px-4 py-2' />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'><BsSend /></button>
            </div>
        </form>
    )
}

export default MessageInput