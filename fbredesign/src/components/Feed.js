import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import Reels from './Reels'
import db from '../firebase'
import { useEffect, useState } from 'react'


function Feed() {
    const [posts, setPosts] = useState([])
//get the daata on refresh 
    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    }, [])


    return (
        <div className='feed' >
            {/* Story Reels */}
            <Reels />

            {/* Message Sender */}
            <MessageSender />

            {/* Posts */}


            {posts.map(post => (
                <Post
                 key={post.data.id}
                 profilePic={post.data.profilePic}
                 message={post.data.message}
                 timestamp={post.data.timestamp}
                 username={post.data.username}
                 image={post.data.image}
                />
            ))}
            {/* <Post
             profilePic='https://pbs.twimg.com/profile_images/1383184766959120385/MM9DHPWC_400x400.jpg'
             message='Happy 4/20'
             timestamp='this is a time stamp'
             username='musk_edd'
             image='https://media.tenor.com/images/60d7e83076e9e58d0691b25b01d1556e/tenor.gif'
            />

            <Post
             profilePic='https://static.hollywoodreporter.com/sites/default/files/2012/10/snoop_dogg_tiff.jpg'
             message='Yoo whats good'
             timestamp='this is a timestamp'
             username='snoopy'
             image='https://media.tenor.com/images/0a802a86fea0b9d02b6be9c8f160dd72/tenor.gif'
            /> */}

        </div>
    )
}

export default Feed
