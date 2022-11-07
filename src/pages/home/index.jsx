/*import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";*/
import Input from "../../components/Input";
import { Box, StyledHome, Rodape } from "./styles";

function Home() {
  return (
    <StyledHome>
      <Box>
        <h1>Página HOME</h1>
      </Box>
      <Rodape>
        <span>
          <strong>P.O.: </strong>
          Rodolfo Jaques
        </span>
        <span>
          <strong>Scrum Master: </strong>
          Renan Martini
        </span>
        <span>
          <strong>Tech Leader: </strong>
          Susimara Roberti
        </span>
        <span>
          <strong>Dev: </strong>
          Abner Leal
        </span>
        <span>
          <strong>Dev: </strong>
          Alex Flavio
        </span>
        <span>
          <strong>Dev: </strong>
          Raquel Sá
        </span>
      </Rodape>
    </StyledHome>
  );
}

export default Home;
