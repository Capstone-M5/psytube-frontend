import { StyledDivInput } from "./styles";
import image from "../../assets/Ellipse 1.png";

function Input() {
  return (
    <StyledDivInput>
      <input type="text" />
      <button>
        <img src={image} alt="" />
      </button>
    </StyledDivInput>
  );
}
export default Input;
