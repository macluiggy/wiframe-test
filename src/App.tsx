import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";
import ReactPlayer from "react-player";
// import {Animated} from 'react-animated-css'

function App() {
  const [video, setVideo] = useState(video1);
  const [loop, setLoop] = useState(true);

  const changeVideo = () => {
    if (video === video1) {
      setVideo(video2);
      setLoop(false);
      setTimeout(() => {
        setVideo(video3);
        setLoop(true);
      }, 4500);
    } else if (video === video3) {
      setVideo(video4);
      setLoop(false);
      setTimeout(() => {
        setVideo(video1);
        setLoop(true);
      }, 4000);
    }
  };

  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      {/* <video width="750" height="500" controls>
        <source src={video1} type="video/mp4" />
      </video> */}
      <button
        onClick={changeVideo}
        className="btn btn-compact-footprint"
        style={{
          display: video === video1 ? "block" : "none",
        }}
      >
        compact footprint
      </button>

      {video === video3 && (
        <div className="description">
          <button className="btn">Compact footprint</button>
          <p>
            Smallest, fully contained palletizing unit for a single pallet and
            load/unload function utilizing a pallet jack or forklift
          </p>
        </div>
      )}

      <ReactPlayer
        url={video}
        width={"65%"}
        height="65%"
        loop={loop}
        playing={true}
        controls
      />
      {video === video3 && (
        <div>
          <button className="btn btn-back-to-features" onClick={changeVideo}>
            Back to Features
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
