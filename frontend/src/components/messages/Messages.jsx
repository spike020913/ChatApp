import React, { useEffect } from 'react'
import { useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
    const { messages, loading } = useGetMessages()
    const lastMessageRef = useRef()
    useListenMessages()
    // console.log("Messages", messages)
    // console.log("Messages length", messages.length)

    useEffect(() => {
        // render issue, we need to setTime out
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 10)

    }, [messages])

    return (
        <div className="px-4 flex-1 overflow-auto">
            {/* {Display all the message} */}
            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (

                    <div key={message._id}
                        ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))}

            {/* {If loading, show skeleon} */}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {/* {If no message, show this message} */}
            {!loading && messages.length === 0 && (
                <p className='text-center text-black'>Send a message to start the conversation!</p>
            )}
        </div>
    )
}

export default Messages