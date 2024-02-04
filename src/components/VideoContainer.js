import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        if (!data.ok) return;
        const jsonData = await data.json();
        console.log(jsonData, "api ress");
        setVideos(jsonData.items);
      } catch (error) {
        console.error(error);
        setVideos([]);
      }
    })();
  }, []);

  return (
    <div className="flex flex-wrap">
      {/* do for 1, then map */}
      {videos?.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard videoDetails={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
