import { iCardProps } from "../../interfaces";
import { StyledArticle } from "./styles";

export function Card({
  thumbnail,
  sizeX,
  maxSizeX,
  maxSizeY,
  sizeY,
}: iCardProps) {
  return (
    <StyledArticle
      sizeX={sizeX}
      maxSizeX={maxSizeX}
      sizeY={sizeY}
      maxSizeY={maxSizeY}
    >
      <img src={thumbnail} alt="" />
    </StyledArticle>
  );
}
