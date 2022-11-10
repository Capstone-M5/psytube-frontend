import { createContext, useState } from "react";
import { iChildren, iVideo, iVideoContext } from "../../interfaces";

export const VideoContext = createContext<iVideoContext>({} as iVideoContext);

export const VideoProvider = ({ children }: iChildren) => {
  const [video, setVideo] = useState<iVideo>({} as iVideo);
  const [videoUrl, setVideoUrl] = useState<string>("");

  return (
    <VideoContext.Provider value={{ video, setVideo, videoUrl, setVideoUrl }}>
      {children}
    </VideoContext.Provider>
  );
};
