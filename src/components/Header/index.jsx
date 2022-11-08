import { useHistory } from "react-router-dom";
import { StyledHeader } from "./styles";

/*import { Button } from "./../Button";*/
import Input from "./../Input";

export function Header({ type }) {
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
          <h1 onClick={levarAHome}>PsyTube</h1>
          <div>
            <Input />
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
