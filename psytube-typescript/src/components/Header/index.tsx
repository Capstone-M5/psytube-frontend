import { useHistory } from "react-router-dom";
import { iHeaderProps } from "../../interfaces";
import { StyledHeader, StyledDivTitle, StyledDivLink } from "./styles";

export function Header({ type }: iHeaderProps) {
  const historico = useHistory();

  const levarAoTopDez = () => {
    historico.push("/topdez");
  };

  const levarAHome = () => {
    historico.push("/");
  };

  switch (type) {
    case "topDez":
      return (
        <StyledHeader>
          <StyledDivTitle>
            <h1>PsyTube</h1>
          </StyledDivTitle>
          <StyledDivLink>
            <h2>Faça Donwload dos seus vídeos</h2>
            <p onClick={levarAHome}>AQUI</p>
          </StyledDivLink>
        </StyledHeader>
      );
    default:
      return (
        <StyledHeader>
          <StyledDivTitle>
            <h1>PsyTube</h1>
          </StyledDivTitle>
          <StyledDivLink>
            <h2>TOP 10 vídeos mais baixados</h2>
            <p onClick={levarAoTopDez}>AQUI</p>
          </StyledDivLink>
        </StyledHeader>
      );
  }
}
