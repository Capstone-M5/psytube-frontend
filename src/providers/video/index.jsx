import { createContext, useState } from "react";

export const VideoContext = createContext({});

export const VideoProvider = ({ children }) => {
  const [video, setVideo] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  console.log(videoUrl);
  return (
    <VideoContext.Provider value={{ video, setVideo, videoUrl, setVideoUrl }}>
      {children}
    </VideoContext.Provider>
  );
};
