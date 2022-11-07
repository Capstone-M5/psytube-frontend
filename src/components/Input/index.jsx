import { StyledDivInput } from "./styles";
import image from "../../assets/Ellipse1.png";
import { useContext, useState } from "react";
import { VideoContext } from "../../providers/video";
import API from "../../services/api";
import { toast } from "react-toastify";

function Input() {
  const { setVideo, setVideoUrl } = useContext(VideoContext);
  const [url, setUrl] = useState("");

  const requireVideo = () => {
    setVideoUrl(url);
    toast.promise(
      API.post("video/", { link: url }).then((res) => setVideo(res.data)),
      {
        pending: "Renderizando o video...",
        success: "Video renderizado!",
        error: "Erro ao renderizar!",
      }
    );
  };
  return (
    <StyledDivInput>
      <input type="text" onChange={(e) => setUrl(e.target.value)} />
      <button onClick={requireVideo}>
        <img src={image} alt="" />
      </button>
    </StyledDivInput>
  );
}
export default Input;
