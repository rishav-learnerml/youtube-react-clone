import React from "react";

const VideoCard = ({ videoDetails }) => {
  console.log(videoDetails);
  const { snippet, statistics } = videoDetails;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-md cursor-pointer">
      <img src={thumbnails?.medium?.url} alt="video-thumbnail" className="rounded-lg"/>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
