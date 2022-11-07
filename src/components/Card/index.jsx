import { StyledArticle } from "./styles";

export function Card({ thumbnail, sizeX, maxSizeX, maxSizeY, sizeY }) {
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
