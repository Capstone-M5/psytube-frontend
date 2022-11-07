/*import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";*/
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { StyledDiv, StyledTitle, StyledTop } from "./styles";
import Imagem from "../../assets/psyduck.png";

function TopDez() {
  let thumbnail = Imagem;

  return (
    <StyledTop>
      <Header type="topDez" />
      <StyledTitle>
        <h1>Top 10 Mais Baixados</h1>
      </StyledTitle>
      <StyledDiv>
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
        <Card thumbnail={thumbnail} maxSizeX={"25vh"} maxSizeY={"25vh"} />
      </StyledDiv>
    </StyledTop>
  );
}

export default TopDez;
