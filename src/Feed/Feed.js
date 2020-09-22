import React, { useEffect, useState } from "react";
import db from "../Firebase/firebase";
import MessageSender from "../Message/MessageSender";
import Post from "../Post/Post";
import StoryReels from "../StoryReels/StoryReels";
import "./Feed.css";

function Feed({ id, image, username, profilePic, timestamp, message }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) =>({ id: doc.id, data: doc.data() })))
    })
  }, [])
  
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReels />
      {/* MessangerSender */}
      <MessageSender />

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
    </div>
  );
}

export default Feed;
