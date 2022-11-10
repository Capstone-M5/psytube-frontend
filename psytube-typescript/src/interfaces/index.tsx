import { Dispatch, ReactNode, SetStateAction } from "react";

export interface iChildren {
  children: ReactNode;
}

export interface iVideo {
  title: string;
  thumbnail: string;
  link: string;
  download_url: string;
}

export interface iCardProps {
  thumbnail?: string;
  sizeX?: string;
  maxSizeX?: string;
  maxSizeY?: string;
  sizeY?: string;
}

export interface iButtonProps {
  onclick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  nameButton?: string;
  imgButton?: string;
  nameSize?: string;
  size?: string;
  sizeY?: string;
}

export interface iHeaderProps {
  type?: string;
}

export interface iVideoList {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
  downloads: number;
}

export interface iVideoContext {
  video: iVideo;
  setVideo: Dispatch<SetStateAction<iVideo>>;
  videoUrl: string;
  setVideoUrl: Dispatch<SetStateAction<string>>;
}
