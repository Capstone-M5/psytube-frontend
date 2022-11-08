import { useContext } from "react";
import { VideoContext } from "../../providers/video";
import { IframeVideo, VideoBox } from "./styles";

function YoutubeVideo() {
  const { videoUrl } = useContext(VideoContext);
  const videoPadrao = "https://www.youtube.com/embed/Y11y8Bd0Xyk";
  const LinkVideoRodando = videoUrl
    ? videoUrl
        .replace(".be/", "be.com/embed/")
        .replace("watch?v=", "embed/")
        .split("&t=")[0]
        .split("&ab_channel")[0]
    : videoPadrao;

  return (
    <VideoBox>
      <div>
        <div>
          <IframeVideo
            src={LinkVideoRodando}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></IframeVideo>
        </div>
      </div>
    </VideoBox>
  );
}

export default YoutubeVideo;
