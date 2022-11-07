import { createContext, useState } from "react";

export const VideoContext = createContext({});

export const VideoProvider = ({ children }) => {
  const [video, setVideo] = useState({});
  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
