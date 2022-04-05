import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";
import ReactPlayer from "react-player";

function App() {
  const [video, setVideo] = useState(video1);
  const [loop, setLoop] = useState(true);

  const changeVideo = () => {
    if (video === video1) {
      setVideo(video2);
      setLoop(false);
      setTimeout(() => {
        setVideo(video3);
        setLoop(true)
      }, 4000);
    } else if (video === video3) {
      setVideo(video4);
      setLoop(false);
      setTimeout(() => {
        setVideo(video1);
        setLoop(true)
      }, 4000);
    }
  };

  return (
    <div className="App">
      <h1>hello</h1>
      {/* <video width="750" height="500" controls>
        <source src={video1} type="video/mp4" />
      </video> */}
      <button onClick={changeVideo}>
        {video === video3 ? "return to normal" : "compact footprint"}
      </button>
      <div>{video === video3 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias officia magni eius ipsam voluptatibus similique dolorum eligendi nesciunt enim? Tempore hic illum ullam. Quos nulla veritatis iusto itaque ullam.</p>}</div>
      <ReactPlayer
        url={video}
        width={"80%"}
        height="80%"
        loop={loop}
        playing={true}
        controls
      />
    </div>
  );
}

export default App;
