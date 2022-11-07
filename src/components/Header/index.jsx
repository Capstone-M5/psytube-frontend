import { useHistory } from "react-router-dom";
import { StyledHeader } from "./styles";

/*import { Button } from "./../Button";*/
/*import { Input } from "./../Input"*/

export function Header({ type }) {
  const historico = useHistory();

  const levarAoTopDez = () => {
    historico.push("/topdez");
  };

  switch (type) {
    case "topDez":
      return (
        <StyledHeader>
          <h1>PsyTube</h1>
          <div>
            <form>
              <input name="link" placeholder="Colo aqui o link do vídeo" />
              <button type="submit">!!!</button>
            </form>
          </div>
        </StyledHeader>
      );
    default:
      return (
        <StyledHeader>
          <h1 onClick={levarAoTopDez}>PsyTube</h1>
        </StyledHeader>
      );
  }
}
