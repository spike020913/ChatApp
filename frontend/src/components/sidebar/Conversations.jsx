import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../../utils/emojis'

const Conversations = () => {

    const { loading, conversations } = useGetConversation()
    console.log(conversations)

    return (
        <div className="py-2 flex flex-col overflow-auto">

            {conversations.map((conversation, index) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={index === conversations.length - 1} />
            ))}
            {loading ? <span className='loading loading-spinner'></span> : null}
        </div>
    )
}

export default Conversations