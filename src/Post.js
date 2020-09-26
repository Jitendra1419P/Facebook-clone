import { Avatar } from '@material-ui/core'
import { Message } from '@material-ui/icons';
import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import "./Post.css" 

function Post({profilePic, image, username,timestamp,massage}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post_topInfo">
    <h3>{username}</h3>
    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </div>  
            </div>

            <div className="post__bottom">
    <p>{massage}</p>
            </div>
            <div className="post_image">
<img src={image} alt=""/>
            </div>
<div className="post__options">
    <div className="post__option">
        <ThumbUpIcon/>
        <p>Like</p>
    </div>
    <div className="post__option">
        <ChatBubbleOutlineIcon/>
        <p>Comment</p>
    </div>
    <div className="post__option">
        <NearMeIcon/>
        <p>Share</p>
    </div>
    <div className="post__option">
        <AccountCircleIcon/>
        <ExpandMoreOutlinedIcon/>
        
    </div>
</div>
        </div>
    );
}

export default Post
