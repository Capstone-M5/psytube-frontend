import { iButtonProps } from "../../interfaces";
import { ButtonCM } from "./styles";

export function Button({
  onclick,
  type,
  nameButton,
  imgButton,
  nameSize = "medium",
  size = "40px",
  sizeY = "40px",
}: iButtonProps) {
  return (
    <ButtonCM
      onClick={onclick}
      nameSize={nameSize}
      type={type}
      size={size}
      sizeY={sizeY}
    >
      {imgButton && <img src={imgButton} alt="" />}
      {nameButton}
    </ButtonCM>
  );
}
