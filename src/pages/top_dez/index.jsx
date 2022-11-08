/*import { useEffect } from "react";
import { useContext } from "react";
*/
import { useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { StyledDiv, StyledTitle, StyledTop } from "./styles";
import Imagem from "../../assets/psyduck.png";
import API from "../../services/api";
import { useEffect } from "react";

function TopDez() {
  let thumbnail = Imagem;

  const [arrVideos, setArrVideos] = useState([]) 
  console.log(arrVideos);

  useEffect (() => {
    API.get("videos/").then(r => setArrVideos(r.data.results))
  },[])

  return (
    <StyledTop>
      <Header type="topDez" />
      <StyledTitle>
        <h1>Top 10 Mais Baixados</h1>
      </StyledTitle>
      <StyledDiv>
        {
          arrVideos.map((video) => (
            <Card 
            thumbnail={video.thumbnail} 
            maxSizeX={"45vh"} 
            maxSizeY={"25vh"} 
            />
          ))
        }
        
      </StyledDiv>
    </StyledTop>
  );
}

export default TopDez;
