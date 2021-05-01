import './Feed.css'
import MessageSender from './MessageSender'
import Reels from './Reels'

function Feed() {
    return (
        <div className='feed' >
            {/* Story Reels */}
            <Reels />

            {/* Message Sender */}
            <MessageSender />
        </div>
    )
}

export default Feed
