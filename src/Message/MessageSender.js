import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { InsertEmoticon, VideoLibrary } from "@material-ui/icons";
import { useStateValue } from "../StateProvider1/StateProvider";
import firebase from "firebase";
import db from "../Firebase/firebase";

function MessageSender() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState();
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`What's os your mind, ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCallIcon style={{ color: "red" }} />
          <h3>live Video</h3>
        </div>
        <div className="messageSender__option">
          <VideoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
