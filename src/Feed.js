import React, {useEffect, useState } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import Messagesender from './Messagesender'
import Post from './Post'
import db from './firebase'


function Feed() {
    const [post, setPosts] = useState([]);
useEffect(()=>{
db.collection("posts").orderBy("timestamp", "desc" ).onSnapshot((snapshot)=>
setPosts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data()})))
);
}, []);

    return (
        <div className="feed">
            {/* Story Reel */}
            <StoryReel/>
            {/* Massage Sender */}
            <Messagesender/>
            {/* <Post 
            profilePic='https://lh3.googleusercontent.com/ogw/ADGmqu-qdrR-Cqcn5_PDL1pDoJAY4PuYYd68NGtB-JEx=s64-c-mo'
            massage="Wow this Works!"
            timestamp="This is a timestamp"
            username="Jitendra"
            image='https://hi-static.z-dn.net/files/d4e/97d4706f6c5f3ea5e9f87a623b6a7372.jpg'
            /> */}
            {post.map((post)=>(
                <Post
                key={post.id}
                profilePic={post.data.profilePic}
                massage={post.data.massage}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))}
            
        </div>
    );
}

export default Feed
