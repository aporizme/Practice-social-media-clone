import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
function Post({ profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpOutlinedIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeOutlinedIcon  />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post
